const red = document.querySelector('#element-red')
      const gray = document.querySelector('#element-gray')
      const yellow = document.querySelector('#element-yellow')
      
      red.style.backgroundColor = "red"
      yellow.style.backgroundColor = "yellow"
      gray.style.backgroundColor = "gray"

      let elementColor = ""
      let areaColor = ""

      const boxRed = document.querySelector('#area-red')
      const boxGray = document.querySelector('#area-gray')
      const boxYellow = document.querySelector('#area-yellow')

      boxRed.style.borderColor = "red"
      boxGray.style.borderColor = "gray"
      boxYellow.style.borderColor = "yellow"

      const onDrag = (e) => {
          e.stopPropagation()
          e.preventDefault()
      }

      const onDrop = (e) => {
          e.stopPropagation()
          e.preventDefault()
          areaColor = e.path[0]
          if(areaColor.style.borderColor === elementColor.style.backgroundColor){
              areaColor.style.backgroundColor = elementColor.style.backgroundColor
              elementColor.style.display = "none"
          }
      }

      const elDrag = (e) => {
          elementColor = e.path[0]
      }


      red.ondragstart = elDrag
      gray.ondragstart = elDrag
      yellow.ondragstart = elDrag

      boxRed.ondragenter = onDrag
      boxRed.ondragover = onDrag
      boxRed.ondrop = onDrop
      boxGray.ondragenter = onDrag
      boxGray.ondragover = onDrag
      boxGray.ondrop = onDrop
      boxYellow.ondragenter = onDrag
      boxYellow.ondragover = onDrag
      boxYellow.ondrop = onDrop