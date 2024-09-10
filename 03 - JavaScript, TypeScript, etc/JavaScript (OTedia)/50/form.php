<!DOCTYPE html>
<html>
<head>
     <title>POST Example</title>
     <style>
          *{
               font-size:24px;
          }
          input{
               margin: 5px;
               padding: 5px;
          }
          label{
               display: inline-block;
               width: 100px;
          }
          button{
               margin:10px 10px 10px 110px;
               padding:10px 20px;
          }
     </style>
</head>
<body>
<?php
if(isset($_POST['firstname'])){
     echo "Your full name is: ";
     echo "<b>" . $_POST['firstname'] . " " . $_POST['lastname'] . "</b>";
}else{
     ?>
     <form method="post">
          <label>Firs name</label>
          <input type="text" name="firstname" /><br />
          <label>Last name</label>
          <input type="text" name="lastname" /><br />
          <button type="submit">Submit</button>
     </form>
     <?php
}
?>
</body>
</html>