Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}

function noop() {}

function _createModalFooter(buttons = [] ) {
    if (buttons.length === 0) {
        return document.createElement('div')
    }

    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')

    buttons.forEach(btn => {
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add(`btn-${btn.type || 'secondary'}`)
        $btn.onclick = btn.handler || noop

        wrap.appendChild($btn)
    })

    return wrap
}

function _createModal(options) {
    const DEFAULT_WIDTH = 500
    const modal = document.createElement('div')
    modal.classList.add('amodal')
    modal.insertAdjacentHTML('afterbegin',
        `<div class="modal-overlay" onclick="closeModal()">
        <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}px">
           <div class="modal-header">
             <span class="modal-title">${options.title || 'Окно'}</span>
             ${options.closable ? `<span class="modal-close" onclick="closeModal()">&times;</span>` : ''}
           </div>
           <div class="modal-body" data-content>
           ${options.content || '' }
          </div>
        </div>
    </div>`)
    const footer = _createModalFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))
    document.body.appendChild(modal)
    document.querySelector('.modal-window').addEventListener('click', function (e) {
        e.stopPropagation()
    })


    return modal
}

function openModal() {
    modal.open()
}

function closeModal() {
    modal.close()

}

$.modal = function (options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    let destroy = false

    const modal = {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
        destroy() {
        }
    }
    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            destroy = true
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}