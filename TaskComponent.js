const description = document.getElementById('descriptionBlock');

function createLi(count = 1) {
  const ul = document.createElement('ul');

  const li = document.createElement('li');
  li.setAttribute('class', `li t${count}`);
  li.style.marginLeft = `${count * 5}px`;

  const input = document.createElement('input');
  input.setAttribute('class', 'nameInput');
  input.placeholder = 'name';

  const button = document.createElement('button');
  button.textContent = 'Save';
  button.setAttribute('class', 'button');

  const descriptionInput = document.createElement('textarea');
  descriptionInput.placeholder = 'description';
  descriptionInput.setAttribute('class', 'description');

  li.append(input);
  li.append(descriptionInput);
  li.append(button);

  const h2 = document.createElement(`h${count}`);
  const p = document.createElement('p');

  button.addEventListener('click', (e) => {
    if (e.target.textContent === 'Edit') {
      e.target.textContent = 'Save';
      h2.remove();
      p.remove();
      li.prepend(descriptionInput);
      li.prepend(input);
    } else {
      e.target.textContent = 'Edit';
      h2.textContent = input.value;
      p.textContent = descriptionInput.value;
      li.prepend(p);
      li.prepend(h2);
      input.remove();
      descriptionInput.remove();
      ul.append(createLi(count));

      li.append(createLi(count + 1));
    }
  });

  ul.append(li);

  return ul;
}

function render(target, element) {
  target.append(element);
}

render(description, createLi(1));
