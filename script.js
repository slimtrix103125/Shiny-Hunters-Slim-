document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  // Fake user records
  const users = [
    ["NotoriousSlayer69", "Kai", "kai.real2009@gmail.com", "284739182", "172.58.214.87", "Los Angeles", "247890"],
    ["xxSoftieGurlxx", "Luna", "lunababyy22@yahoo.com", "937481029", "73.45.112.67", "New York", "89420"],
    ["TryhardKillerYT", "Jax", "tryhard.yt@gmail.com", "472819304", "45.67.89.12", "Las Vegas", "1248930"],
    ["AngelicVibesOnly", "Nova", "angelic22@outlook.com", "193847562", "98.76.54.32", "Miami", "67340"],
    ["ShadowReaper_X", "Zane", "shadowx@proton.me", "658291037", "12.34.56.78", "San Francisco", "892450"]
  ];

  const tableHTML = `
    <table>
      <thead>
        <tr>
          <th>Username</th><th>Email</th><th>User ID</th><th>IP Address</th><th>Location</th><th>Robux</th>
        </tr>
      </thead>
      <tbody>
        ${users.map(u => `
          <tr>
            <td>${u[0]}</td><td>${u[2]}</td><td>${u[3]}</td><td>${u[4]}</td><td>${u[5]}</td><td>${u[6]}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>`;

  document.getElementById('userTable').innerHTML = tableHTML;
});
