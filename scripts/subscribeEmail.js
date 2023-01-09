var inputs = document.querySelectorAll('input')

      for (var i = 0, len = inputs.length; i < len; i++) {
        var input = inputs.item(i)

        input.addEventListener('click', (e)=>{
          var target = e.target
          var label = target.previousElementSibling
          target.classList.add('focus')
          label.classList.add('move', 'focus')
        })

        input.addEventListener('blur', (e)=>{
          var target = e.target
          var label = target.previousElementSibling
          if (target.value.length === 0) {
            label.classList.remove('move')
          }
          target.classList.remove('focus')
          label.classList.remove('focus')
        })
        
      }
