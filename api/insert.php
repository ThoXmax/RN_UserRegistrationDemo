<?php
    $CN = mysqli_connect("localhost", "root", "");
    $DB = mysqli_select_db($CN, "member");

    $EncodedData = file_get_contents('php://input');
    $DecodedData = json_decode($EncodedData, true);

    $m_no = $DecodedData['m_no'];
    $m_name = $DecodedData['m_name'];
    $m_course = $DecodedData['m_course'];

    $insertMemberData = "insert into memberData(m_no, m_name, m_course) values ($m_no, '$m_name', '$m_course')";

    $register = mysqli_query($CN, $insertMemberData);

    if ($register) 
        $Message = "Member has been registered successfully";
    else 
        $Message = "Server Error... please try latter";

    $Response[] = array("Message" => $Message);
    echo json_encode($Response);
?>