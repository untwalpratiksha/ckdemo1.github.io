let items = document.querySelectorAll('#traditionCarousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let items1 = document.querySelectorAll('#trendingCarousel .carousel-item')

items1.forEach((el1) => {
    const minPerSlide1 = 4
    let next1 = el1.nextElementSibling
    for (var i=1; i<minPerSlide1; i++) {
        if (!next1) {
            // wrap carousel by using first child
        	next1 = items1[0]
      	}
        let cloneChild1 = next1.cloneNode(true)
        el1.appendChild(cloneChild1.children[0])
        next1 = next1.nextElementSibling
    }
})

let items2 = document.querySelectorAll('#wrapNrollCarousel .carousel-item')

items2.forEach((el2) => {
    const minPerSlide2 = 4
    let next2 = el2.nextElementSibling
    for (var i=1; i<minPerSlide2; i++) {
        if (!next2) {
            // wrap carousel by using first child
        	next2 = items2[0]
      	}
        let cloneChild2 = next2.cloneNode(true)
        el2.appendChild(cloneChild2.children[0])
        next2 = next2.nextElementSibling
    }
})

let items3 = document.querySelectorAll('#beveragesCarousel .carousel-item')

items3.forEach((el3) => {
    const minPerSlide3 = 4
    let next3 = el3.nextElementSibling
    for (var i=1; i<minPerSlide3; i++) {
        if (!next3) {
            // wrap carousel by using first child
        	next3 = items3[0]
      	}
        let cloneChild3 = next3.cloneNode(true)
        el3.appendChild(cloneChild3.children[0])
        next3 = next3.nextElementSibling
    }
})


let items4 = document.querySelectorAll('#beveragesCarousel .carousel-item')

items4.forEach((el4) => {
    const minPerSlide4 = 4
    let next4 = el4.nextElementSibling
    for (var i=1; i<minPerSlide4; i++) {
        if (!next4) {
            // wrap carousel by using first child
        	next4 = items4[0]
      	}
        let cloneChild4 = next4.cloneNode(true)
        el4.appendChild(cloneChild4.children[0])
        next4 = next4.nextElementSibling
    }
})

let items5 = document.querySelectorAll('#snacksTimeCarousel .carousel-item')

items5.forEach((el5) => {
    const minPerSlide5 = 4
    let next5 = el5.nextElementSibling
    for (var i=1; i<minPerSlide5; i++) {
        if (!next5) {
            // wrap carousel by using first child
        	next5 = items5[0]
      	}
        let cloneChild5 = next5.cloneNode(true)
        el5.appendChild(cloneChild5.children[0])
        next5 = next5.nextElementSibling
    }
})

let items6 = document.querySelectorAll('#dessertCarousel .carousel-item')

items6.forEach((el6) => {
    const minPerSlide6 = 4
    let next6 = el6.nextElementSibling
    for (var i=1; i<minPerSlide6; i++) {
        if (!next6) {
            // wrap carousel by using first child
        	next6 = items6[0]
      	}
        let cloneChild6 = next6.cloneNode(true)
        el6.appendChild(cloneChild6.children[0])
        next6 = next6.nextElementSibling
    }
})

let items7 = document.querySelectorAll('#infrastructureCarousel .carousel-item')

items7.forEach((el7) => {
    const minPerSlide7 = 4
    let next7 = el7.nextElementSibling
    for (var i=1; i<minPerSlide7; i++) {
        if (!next7) {
            // wrap carousel by using first child
        	next7 = items7[0]
      	}
        let cloneChild7 = next7.cloneNode(true)
        el7.appendChild(cloneChild7.children[0])
        next7 = next7.nextElementSibling
    }
})
