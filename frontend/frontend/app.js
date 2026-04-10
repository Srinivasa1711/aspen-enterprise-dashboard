async function loadEmployees() {
    const res = await fetch('http://127.0.0.1:5000/api/employees');
    const data = await res.json();

    const list = document.getElementById('employeeList');

    data.forEach(emp => {
        const li = document.createElement('li');
        li.textContent = `${emp.name} - ${emp.role}`;
        list.appendChild(li);
    });
}

window.onload = loadEmployees;
