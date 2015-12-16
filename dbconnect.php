<?php
//connection to the databse
$vans = mysql_connect("localhost", "root", "")or die("Sorry You cannot connect...contact your server Admin");
mysql_select_db("rwandair_db", $vans);
//get my values
$id = $_POST['id'];
$a = $_POST['sname'];
$b = $_POST['fname'];
$c = $_POST['oname'];
$d = $_POST['email'];
$e = $_POST['tel'];
$f = $_POST['gender'];
$g = $_POST['status'];
$h = $_POST['class'];
$i = $_POST['pob'];
$j = $_POST['dob'];
$k = $_POST['country'];
$l = $_POST['district'];
$m = $_POST['nationality'];
$n = $_POST['profession'];
//inserting into my table
$sql = "insert into booking(id,sname,fname,oname,email,tel,gender,status,class,pob,dob,country,district,nationality,profession) values('$id', '$a', '$b', '$c', '$d', '$e', '$f', '$g', '$h', '$i', '$j', '$k', '$l', '$m', '$n')";
$result = mysql_query($sql);
if($result){
if (peg_match("/^[_\.0-9a-zA-z-]+@([0-9a-zA-z][0-9a-zA-z]+\.)+[a-zA-z]{2,6}$/i", $email)){

echo "You have successfully registered!!! <a href='parent.php'>Please register Again</a>";
}else{

echo "Error...Try Again ";
}
}else{

echo "please type a valid email!";
}
?>