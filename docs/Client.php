<?php
session_start();
?>


<html>
<title>EECS 647</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link rel="stylesheet" href="styles/style.css" type="text/css" />
<link rel="stylesheet" href="styles/layout.css" type="text/css" />

<!-- Homepage Specific Elements -->







<!-- End Homepage Specific Elements -->
</head>
<body id="top">

<body>



<br>


<!-- ####################################################################################################### -->



<!-- ####################################################################################################### -->


<div id="sidebar">


		<?php

			echo "<h1 align='center' class='triangle-right' >";
			echo $_SESSION["genuser"];
			echo "</h1>";

		?>
			<ul>

					<li><a href="iframe/Profile.php" target="iframe">Profile</a></li>

					<li><a href="iframe/Favorites.php" target="iframe">Favorites</a></li>

					<li><a href="iframe/Drive.php" target="iframe">Let's Go!</a></li>

				<li><a href="Login.html" >Logout</a></li>


			</ul>


</div>


<div class="wrapper row3">




 <div class="rnd">

<br><br>
</div>




<div id="container" >


	<div id="window" >

		<iframe name="iframe" src="iframe/Profile.php" width="350" height="720" frameborder="0" scrolling="no">
		  <p>Your browser does not support iframes.</p>
		</iframe>



	</div>


</div>






<!--##################Footer####################-->
   <div id="footer">

<br>


<font color="white">
<br> Created 9/7/2015
</div>




</body>
</html>