function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return passwordPattern.test(password);
}

let form = document.forms.form;

let btn = document.getElementById("submitButton");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  let email = form.elements.email.value;
  let password = form.elements.password.value;
  let sex = form.elements.sex.value;
  let role = form.elements.radio.value;
  let p1 = form.elements.perm1.checked;
  let p2 = form.elements.perm2.checked;
  let p3 = form.elements.perm3.checked;
  let p4 = form.elements.perm4.checked;

  if (!email || !password || !sex || !role) {
    alert("fill all the feilds");
    return;
  }

  if (p1 + p2 + p3 + p4 < 2) {
    alert("tick atleast two permissions");
    return;
  }

  if (!validateEmail(email)) {
    alert("enter the valid email");
    return;
  }

  if (!validatePassword(password)) {
    alert(
      "password must contail At least 6 characters, includes uppercase, lowercase, and digits"
    );
    return;
  }

  document.getElementById("assignment").innerHTML = `<ul>
        <li>email:${email}</li>
        <li>password:${password}</li>
        <li>sex:${sex}</li>
        <li>role:${role}</li>
        <li>${p1 + p2 + p3 + p4} permissions ticked</li>
    </ul>
    
    <button>Confirm</button>`;

  console.log(email, password, sex, role, p1 + p2 + p3 + p4);
});
