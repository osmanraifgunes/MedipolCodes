
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>

<body>

	<div class="container">
		<div class="row">
			<a class="btn btn-primary m-3" href="/login.php">
				giriş
			</a>
	


			<?php
			$output = `$inputdegeri`; 
			echo $output . "<br/><br/><br/><br/>";
			
			$isim  = ($parametre == null) ? 'boş' : $parametre;

			// if($parametre == null)
			// {
			// 	$isim = 'boş';
			// }
			// else{
			// 	$isim  = $parametre;
			// }





			$isim  = $_POST['name'] ?? 'boş';
			// if($_POST['name'] == null)
			// {
			// 	$isim = 'boş';
			// }
			// else{
			// 	$isim  = $_POST['name'];
			// }
			#echo $bayrak . " dsfd ";

			$paramtere = $_GET['em'];
			echo $paramtere . "<br/>"
			?>
			<?php
			#var_dump(Get_defined_constants() );
			#$deneme = $deneme+ 50;
			#echo $deneme . "<br/>";
			$degiskenAdi = 'merhaba';
			$merhaba = 'dünyaŞ';
			echo $$degiskenAdi;


			$a = 'hel' . 'lo';
			$$a = 'world1';
			echo $a;
			echo "<br/>";
			echo $$a;
			echo "<br/>";
			echo $a;
			echo "<br/>";
			echo $hello;
			// for(i;100)
			// { 
			// $kullanicitipi$i = $i;
			// }
			?>
			<br />

			<?php
			goto Etiket;


			$bayrak = 0;

			function kos(int $sayi)
			{
				global $bayrak;
				$bayrak += 1;
				echo  $bayrak;
			}

			kos("yeni tur");
			kos("yeni tur");
			echo var_dump($GLOBALS);
			Etiket:
			?>
			<?php



			#echo var_dump( $paramtere ). "<br/>";



			echo isset($_GET['em']);
			echo '-';



			print <<<END
						<br/><br/>Burada "yorumlu metin" (heredoc) sözdizimi kullanılmış
						olup bu dizgenin içindeki her  yorumlanır.
						Yorumlu metin sonlandırıcısı son satırda yer almalı ve
						ardındaki noktalı virgül dışında etrafında hiçbir karakter
						(boşluklar dahil) bulunmamalıdır!
						END;

			?>
		</div>
		<div class="row">
			<?php for ($i = 0; $i < 50; $i++) :  ?>
				<div class="col-4">
					<div class="card m-3">
						<div class="card-body">
							marlin brando 1
						</div>
					</div>
				</div>
			<?php endfor; ?>

		</div>
	</div>
</body>

</html>