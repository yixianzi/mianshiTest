if (rs.code == "0") {
  $.showWarningModal(
    "<p>IP地址:" +
      rs.ip +
      "<br />" +
      "该地址为9929网地址，请将接入地市信息变更至联通-9929节点。注意：该地址暂不支持流量清洗功能，" +
      "流量封堵仅支持全网封堵和国际封堵</p >"
  );
  result = false;
} else if (rs.code == "2") {
  $.showWarningModal(
    "<p>IP地址:" +
      rs.ip +
      "<br />" +
      "该地址包含9929和非9929网地址，请查证</p >"
  );
  result = false;
} else if (rs.code == "3") {
  $.showWarningModal(
    "<p>IP地址:" +
      rs.ip +
      "<br />" +
      "该地址不是9929网地址，请填入正确接入地市信息</p >"
  );
  result = false;
}
