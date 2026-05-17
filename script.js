*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Arial, sans-serif;
}

body{
    background:#0f172a;
    color:white;
    padding:20px;
}

h1{
    text-align:center;
    margin-bottom:30px;
    font-size:40px;
}

.cards{
    display:flex;
    gap:20px;
    flex-wrap:wrap;
    justify-content:center;
    margin-bottom:30px;
}

.card{
    background:#1e293b;
    padding:20px;
    width:220px;
    border-radius:15px;
    text-align:center;
    transition:0.3s;
    box-shadow:0 4px 10px rgba(0,0,0,0.3);
}

.card:hover{
    transform:translateY(-8px);
}

.card h2{
    font-size:18px;
    margin-bottom:10px;
    color:#94a3b8;
}

.card p{
    font-size:30px;
    font-weight:bold;
}

.main{
    display:flex;
    gap:20px;
    margin-top:30px;
    align-items:flex-start;
}

.left{
    flex:2;
}

.charts{
    display:flex;
    gap:20px;
    flex-wrap:wrap;
}

.chart-box{
    background:#1e293b;
    padding:20px;
    border-radius:15px;
    flex:1;
    min-width:300px;
    box-shadow:0 4px 10px rgba(0,0,0,0.3);
}

.chart-box h2{
    text-align:center;
    margin-bottom:15px;
}

canvas{
    width:100% !important;
}

.right{
    flex:1;
}

.form-box{
    background:#1e293b;
    padding:20px;
    border-radius:15px;
    margin-bottom:20px;
    box-shadow:0 4px 10px rgba(0,0,0,0.3);
}

.form-box h2{
    margin-bottom:15px;
}

input{
    width:100%;
    padding:12px;
    margin-bottom:10px;
    border:none;
    border-radius:10px;
    outline:none;
}

button{
    width:100%;
    padding:12px;
    border:none;
    border-radius:10px;
    background:#3b82f6;
    color:white;
    font-size:16px;
    cursor:pointer;
    transition:0.3s;
}

button:hover{
    background:#2563eb;
}

.table-box{
    background:#1e293b;
    padding:20px;
    border-radius:15px;
    box-shadow:0 4px 10px rgba(0,0,0,0.3);
    overflow-x:auto;
}

.table-box h2{
    margin-bottom:15px;
}

table{
    width:100%;
    border-collapse:collapse;
}

th, td{
    padding:12px;
    text-align:center;
    font-size:14px;
}

th{
    background:#3b82f6;
}

tr:nth-child(even){
    background:#334155;
}

tr:hover{
    background:#475569;
}

@media(max-width:900px){

    .main{
        flex-direction:column;
    }

}
