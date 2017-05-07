<?php
session_start();
?>


<html>

<head>
<title>EECS 647</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link rel="stylesheet" href="../styles/style.css" type="text/css" />


<!-- Homepage Specific Elements -->
</head>

<body>



<div id="container" >


	<div id="window" >

		<h1 align="center" class="triangle-right" >Current Services</h1>

		<hr>

		<b style="color:black"> Where you are needed</b>
    
		

		 <b style="color:black">Pick Up:</b><br>
		 <b style="color:black">Destination:</b><br>
		<b style="color:black"> How many people:</b><br>

		<?php
			$servername = "mysql.eecs.ku.edu";
			$password = "Password123!";
			$username = "gcastro";
			$dbname = "gcastro";
			$conn = new mysqli($servername, $username, $password, $dbname);
			if ($conn->connect_error) {
    			die("Connection failed: " . $conn->connect_error);
			}
			$sql = 'SELECT * FROM VEHICLE WHERE PLATE = (SELECT PLATE FROM DRIVES WHERE DLICENSE = (SELECT DLICENSE FROM DRIVER WHERE PASSWORD = "'.$_SESSION["genpass"].'" AND DUSERNAME = "'.$_SESSION["genuser"].'"))' ; 
			$result = $conn->query($sql);
			$capacity = 10;
			$sql1 = '';
			echo '<form action="DriverServices1.php" method="post">';
			if($result->num_rows > 0){
				while($row = $result->fetch_assoc()){
					$type = $row["TYPE"];
					$sql1 = 'SELECT * FROM CLIENT WHERE VEHICLETYPEREQ = "'.$type.'"';
					$result1 = $conn->query($sql1);
					
					if($result1->num_rows > 0){
						while($row1 = $result1->fetch_assoc()){
							$user = $row1["USERNAME"];
							$pilat = $row1["PICKUPLAT"];
							$pilong = $row1["PICKUPLONG"];
							echo '<input type="radio" name="option" value ="'.$user.'">'.$user.'<br>';

						}
					}else{
						echo "ouch1";
					}
				}
			}else{
				echo "ouch";
			}
			echo '<br><br>';
			echo '<input type="submit" value="Submit">';



		?>


	</div>


</div>



</body>
</html>
