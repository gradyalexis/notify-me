let active = true

document.getElementById('notifyButton').onclick = function () {
  if (active) {
    showSendEmail()
  }
}

function showEmailText(check) {
  if (check) {
    document.getElementById('emailText').style.fontSize = '0'
    document.getElementById('emailText').style.left = '40px'
  } else {
    document.getElementById('emailText').style.fontSize = '25px'
    document.getElementById('emailText').style.left = '20px'
  }
}

function enableSendButton(id) {
  if (document.getElementById(id).value) {
    document.getElementById('sendButton').style.color = '#ffffff'
    document.getElementById('sendButton').disabled = false
  } else {
    document.getElementById('sendButton').style.color = '#ffbaba'
    document.getElementById('sendButton').disabled = true
  }
}

function confirmSendEmail() {
  document.getElementById('emailInput').value = ''
  document.getElementById('sendButton').style.color = '#ffbaba'
  document.getElementById('sendButton').disabled = true
  document.getElementById('emailInput').style.fontSize = '0px'
  showEmailText(true)
  document.getElementById('sendButton').style.right = '30px'
  document.getElementById('sendButton').style.width = '0'
  document.getElementById('sendButton').style.height = '0'
  document.getElementById('sendButton').style.fontSize = '0'
  document.getElementById('sendButton').style.opacity = 0
  setTimeout(function () {
    document.getElementById('notifyButton').style.width = '240px'
    document.getElementById('thankText').style.fontSize = '25px'
    document.getElementById('thankText').style.opacity = 1
  }, 300)
  setTimeout(function () {
    document.getElementById('emailInput').style.display = 'none'
    document.getElementById('thankText').style.fontSize = '0px'
    document.getElementById('thankText').style.opacity = 0
    setTimeout(function () {
      document.getElementById('notifyText').style.fontSize = '25px'
      document.getElementById('notifyText').style.opacity = 1
      active = true
    }, 300)
  }, 2000)
}

function showSendEmail() {
  active = false
  document.getElementById('sendButton').style.display = 'block'
  document.getElementById('notifyText').style.fontSize = 0
  document.getElementById('notifyText').style.opacity = 0
  document.getElementById('notifyButton').style.width = '400px'
  setTimeout(function () {
    document.getElementById('notifyButton').style.width = '380px'
    setTimeout(function () {
      document.getElementById('sendButton').style.right = '5px'
      document.getElementById('sendButton').style.width = '77px'
      document.getElementById('sendButton').style.height = '53px'
      document.getElementById('sendButton').style.fontSize = '25px'
      document.getElementById('sendButton').style.opacity = 1
      document.getElementById('emailText').style.fontSize = '25px'
      document.getElementById('emailText').style.left = '20px'
      document.getElementById('emailInput').style.display = 'block'
      document.getElementById('emailInput').style.fontSize = '25px'
      setTimeout(function () {
        document.getElementById('sendButton').style.width = '75px'
        document.getElementById('sendButton').style.height = '50px'
      }, 300)
    }, 200)
  }, 200)
}