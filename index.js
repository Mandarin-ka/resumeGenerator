const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const userImage = document.getElementById('userImage');
      userImage.src = e.target.result;
      userImage.style.display.block;
    };

    reader.readAsDataURL(file);
  }
});

function changeMode(target, inputTarget) {
  if (target.textContent === 'edit') {
    target.textContent = 'save';
    inputTarget.style.display = 'inline-block';
  } else {
    target.textContent = 'edit';
    inputTarget.style.display = 'none';
  }
}

document.querySelectorAll('.edit-save').forEach((t) => {
  t.addEventListener('click', (e) => {
    if (e.target.textContent !== 'edit') {
      const inputName = e.target.parentNode.children[1];
      console.log();
      e.target.parentNode.querySelector('.info').textContent = inputName.value;
    }

    changeMode(e.target, e.target.parentNode.children[1]);
  });
});

//Validation

const getButton = (target) => {
  return target.parentNode.children[2];
};

document.getElementById('inputName').addEventListener('input', (e) => {
  if (e.target.value.length < 50) {
    e.target.style.border = '1px solid black';
    getButton(e.target).removeAttribute('disabled');
  } else {
    e.target.value = e.target.value.slice(0, -1);
    e.target.style.border = '1px solid red';
    getButton(e.target).setAttribute('disabled', 'disabled');
  }
});

document.getElementById('inputAge').addEventListener('input', (e) => {
  const regExp = /^\d+$/;
  if (regExp.test(e.target.value) && +e.target.value < 130) {
    e.target.style.border = '1px solid black';
    getButton(e.target).removeAttribute('disabled');
  } else {
    e.target.value = e.target.value.slice(0, -1);
    e.target.style.border = '1px solid red';
    getButton(e.target).setAttribute('disabled', 'disabled');
  }
});

document.getElementById('inputEmail').addEventListener('input', (e) => {
  const regExp = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

  if (regExp.test(e.target.value)) {
    e.target.style.border = '1px solid black';
    getButton(e.target).removeAttribute('disabled');
  } else {
    e.target.style.border = '1px solid red';
    getButton(e.target).setAttribute('disabled', 'disabled');
  }
});

document.getElementById('inputPhone').addEventListener('input', (e) => {
  const regExp = /^[0-9\-\+]{9,15}$/;

  if (regExp.test(e.target.value)) {
    e.target.style.border = '1px solid black';
    getButton(e.target).removeAttribute('disabled');
  } else {
    e.target.style.border = '1px solid red';
    getButton(e.target).setAttribute('disabled', 'disabled');
  }
});
