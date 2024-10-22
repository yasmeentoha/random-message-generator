const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})