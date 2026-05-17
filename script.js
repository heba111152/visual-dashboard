const bar = document.getElementById('barChart');

new Chart(bar, {
    type: 'bar',

    data: {
        labels: ['Ahmed', 'Sara', 'Omar'],

        datasets: [{
            label: 'Grades',
            data: [95, 88, 91],

            backgroundColor:[
                '#3b82f6',
                '#8b5cf6',
                '#22c55e'
            ],

            borderRadius:10
        }]
    },

    options:{
        responsive:true,

        plugins:{
            legend:{
                labels:{
                    color:'white'
                }
            }
        },

        scales:{
            x:{
                ticks:{
                    color:'white'
                }
            },

            y:{
                ticks:{
                    color:'white'
                },

                beginAtZero:true,
                max:100
            }
        }
    }
});

const pie = document.getElementById('pieChart');

new Chart(pie, {
    type:'doughnut',

    data:{
        labels:['Excellent','Good','Average'],

        datasets:[{
            data:[45,35,20],

            backgroundColor:[
                '#3b82f6',
                '#22c55e',
                '#f97316'
            ]
        }]
    },

    options:{
        responsive:true,

        plugins:{
            legend:{
                labels:{
                    color:'white'
                }
            }
        }
    }
});

function addStudent(){

    let id = document.getElementById("studentId").value;

    let name = document.getElementById("studentName").value;

    let grade = document.getElementById("studentGrade").value;

    if(id === "" || name === "" || grade === ""){
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow();

    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${grade}</td>
    `;

    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("studentGrade").value = "";
}
