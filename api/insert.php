<?php
    $CN = mysqli_connect("localhost", "root", "");
    $DB = mysqli_select_db($CN, "member");

    $m_no = $_POST['m_no'];
    $m_name = $_POST['m_name'];
    $m_course = $_POST['m_course'];

    $insertMemberData = "insert into memberData(m_no, m_name, m_course) values ($m_no, '$m_name', '$m_course')";

    $register = mysqli_query($CN, $insertMemberData);

    if ($register) 
        $Message = "Member has been registered successfully";
    else 
        $Message = "Server Error... please try latter";

    $Response[] = array("Message" => $Message);
    echo json_encode($Response);
?>