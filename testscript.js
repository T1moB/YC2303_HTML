const toastTrigger = document.getElementById('liveToastBtn')
const toastTrigger2 = document.getElementsByClassName('toastItem')
const toastLiveExample = document.getElementById('liveToast')
const toastText = document.getElementById('toast-text')
console.log(toastTrigger2)
if (toastTrigger2.length > 0) {
  for (let i = 0; i < toastTrigger2.length; i++) {
    toastTrigger2[i].addEventListener('click', () => {
      const toast = new bootstrap.Toast(toastLiveExample)

      toast.show()
    })
  }
}

