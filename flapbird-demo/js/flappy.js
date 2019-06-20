function newElement(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barrier(reverse = false) {
    this.element = newElement('div', 'barrier')

    const border = newElement('div', 'border')
    const body = newElement('div', 'body')
    this.element.appendChild(reverse ? body : border)
    this.element.appendChild(reverse ? border : body)

    this.setHeight = height => body.style.height = `${height}px`
}

function BarriersPair(height, open, x) {
    this.element = newElement('div', 'barriers-pair')

    this.top = new Barrier(true)
    this.bottom = new Barrier(false)

    this.element.appendChild(this.top.element)
    this.element.appendChild(this.bottom.element)

    this.randomOpening = () => {
        const heightTop = Math.random() * (height - open)
        const heightBottom = height - open - heightTop
        this.top.setHeight(heightTop)
        this.bottom.setHeight(heightBottom)
    }

    this.getX = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`
    this.getWidth = () => this.element.clientWidth

    this.randomOpening()
    this.setX(x)
}

function Barriers(height, width, open, space, pointNotify){
    this.pairs =[
        new BarriersPair(height, open, width),
        new BarriersPair(height, open, width + space),
        new BarriersPair(height, open, width + space * 2),
        new BarriersPair(height, open, width + space * 3)
    ]

    const displacement = 3
    this.animate = () => {
        this.pairs.forEach(pair => {
            pair.setX(pair.getX() - displacement)

            // when element leaves the game area
            if (pair.getX() < -pair.getWidth()){
                pair.setX(pair.getX() + space * this.pairs.length)
                pair.randomOpening()
            }

            const mid = width / 2
            const passedByTheMiddle = pair.getX() + displacement >= mid
                && pair.getX() < mid
            if (passedByTheMiddle) pointNotify()
        })
    }
}

function Bird(gameHeight) {
    let fly = false

    this.element = newElement('img', 'bird')
    this.element.src = 'imgs/bird.png'

    this.getY = () => parseInt(this.element.style.bottom.split('px')[0])
    this.setY = x => this.element.style.bottom = `${x}px`

    window.onkeydown = e => fly = true
    window.onkeyup = e => fly = false

    this.animate = () => {
        const newY = this.getY() + (fly ? 8 : -5)
        const heightMax = gameHeight - this.element.clientHeigth

        if (newY <= 0){
            this.setY(0)
        } else if (newY >= heightMax) {
            this.setY(heightMax)
        } else {
            this.setY(newY)
        }
    }

    this.setY(gameHeight / 2)
}

function Progress() {
    this.element = newElement('span', 'progress')
    this.updatePoints = points => {
        this.element.innerHTML = points
    }
    this.updatePoints(0)
}

function overlapping(elementA, elementB) {
    const a = elementA.getBoundingClientRect()
    const b = elementB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}

function collided(bird, barriers) {
    let collided = false
    barriers.pairs.forEach(BarriersPair => {
        if (!collided) {
            const top = BarriersPair.top.element
            const bottom = BarriersPair.bottom.element
            collided = overlapping(bird.element, top)
                || overlapping(bird.element, bottom)
        }
    })
    return collided
}

function FlappyBird() {
    let points = 0

    const gameArea = document.querySelector('[wm-flappy]')
    const height = gameArea.clientHeight
    const width = gameArea.clientWidth

    const progress = new Progress()
    const barriers = new Barriers(height, width, 250, 400, 
        () => progress.updatePoints(++points))
    const bird = new Bird(height)

    gameArea.appendChild(progress.element)
    gameArea.appendChild(bird.element)
    barriers.pairs.forEach(pair => gameArea.appendChild(pair.element))

    this.start = () => {
        //loop of the game
        const timer = setInterval(() => {
            barriers.animate()
            bird.animate()

            if (collided(bird, barriers)){
                clearInterval(timer)
            }
        }, 20)
    }
}

new FlappyBird().start()