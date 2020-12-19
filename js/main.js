function initModal(wrapperId, showBtnId) {
    let modalWrapper = document.getElementById(wrapperId)
    let closeBtn = modalWrapper.getElementsByClassName("modal-close")[0]
    let bg = modalWrapper.getElementsByClassName("modal-bg")[0]
    let showBtn = document.getElementById(showBtnId)
    let body = document.getElementsByTagName("body")[0]

    showBtn.addEventListener("click", function(e) {
        body.classList.add("disable-scroll")
        modalWrapper.classList.add("modal-wrapper-show")
    })

    closeBtn.addEventListener("click", function(e) {
        body.classList.remove("disable-scroll")
        modalWrapper.classList.remove("modal-wrapper-show")
    })

    bg.addEventListener("click", function(e) {
        body.classList.remove("disable-scroll")
        modalWrapper.classList.remove("modal-wrapper-show")
    })
}

initModal("informationWrapper", "showModal")
initModal("avatarWrapper", "photo")
