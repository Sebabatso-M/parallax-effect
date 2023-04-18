window.addEventListener('scroll', function (e: Event) {
    const elements = document.querySelectorAll('.scroll');

    //returns the number of pixels the document is currently scrolled along the vertical axis
    let scrolled = window.scrollY;

    elements.forEach((element) => {
        let target = element as HTMLUListElement;

        let posX: number = scrolled * parseFloat(target.dataset.ratex!);
        let posY: number = scrolled * parseFloat(target.dataset.ratey!);

        if (target.dataset.direction === 'horizontal')
            target.style.transform = `translate3d(${posX}px,${posY}px,0)`;
        else target.style.transform = `translate3d(0,${posY}px,0)`;
    });
});
