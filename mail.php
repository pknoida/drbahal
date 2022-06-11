<?php

$r1 = $_POST["t1"];
$r2 = $_POST["t2"];
$r3 = $_POST["t3"];
$r4 = $_POST["t4"];
$r5 = $_POST["t5"];
// Your email address
$email = "drbahal@gmail.com";

// The subject
$subject = "Enquiry from website";

// The message
$message = '<html><body><table border=0 width=554>

<tr><td width=200>Name </td><td>'.$r1.'</td></tr>
<tr><td>  Email </td><td>'.$r2.'</td></tr>
<tr><td>Address</td><td> '.$r3.'</td></tr>
<tr><td>Mobile No</td><td> '.$r4.'</td></tr>
<tr><td>Enquiry</td><td>'.$r5.'</td></tr>



</table></body></html>'; 

// To send HTML mail, the Content-type header must be set
$headers  = $r1.': 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
//$headers .= 'To: Mary <rintu222@yahoo.com>' . "\r\n";
//$headers .= 'From: quiry <rntu222@rediffmail.com>' . "\r\n";
//$headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
//$headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";

mail($email, $subject, $message, "From: $headers");
header("Location: http://www.drbahal.com/thanks.htm"); 

?> 


  