﻿
var messageNotShow = true;
var Nochange = true;
$(document).ready(function () {

    init();
    initDisplay();
    initForChange();
    initProvince();


});

function initProvince() {

    var selectOption = {
        "北京": {
            "key": "北京",
            "values": { "东城": "东城", "西城": "西城", "崇文": "崇文", "宣武": "宣武", "朝阳": "朝阳", "丰台": "丰台", "石景山": "石景山", "海淀": "海淀", "门头沟": "门头沟", "房山": "房山", "通州": "通州", "顺义": "顺义", "昌平": "昌平", "大兴": "大兴", "平谷": "平谷", "怀柔": "怀柔", "密云": "密云", "延庆": "延庆" }
        },
        "广东省": {
            "key": "广东省",
            "values": { '广州': '广州', '深圳': '深圳', '珠海': '珠海', '湛江': '湛江', '佛山': '佛山', '汕头': '汕头', '中山': '中山', '韶关': '韶关', '英德': '英德', '梅州': '梅州', '惠州': '惠州', '河源': '河源', '潮州': '潮州', '东莞': '东莞', '茂名': '茂名', '肇庆': '肇庆', '江门': '江门', '汕尾': '汕尾', '阳江': '阳江', '清远': '清远', '揭阳': '揭阳', '云浮': '云浮', '潮阳': '潮阳', '顺德': '顺德' }
        },
        "上海市": {
            "key": "上海市",
            "values": { '上海市': '上海市' }
        },
        "香港行政区": {
            "key": "香港行政区",
            "values": { '香港': '香港' }
        },
        "澳门行政区": {
            "key": "澳门行政区",
            "values": { '澳门': '澳门' }
        },
        "台湾省": {
            "key": "台湾省",
            "values": { '台北市': '台北市', '高雄市': '高雄市', '嘉义': '嘉义', '台南县': '台南县', '台中县': '台中县', '桃园市': '桃园市', '新化县': '新化县', '新竹': '新竹', '漳化县': '漳化县' }
        },
        "天津市": {
            "key": "天津市",
            "values": { '天津市': '天津市', '静海': '静海', '武清': '武清' }
        },
        "河北省": {
            "key": "河北省",
            "values": { '石家庄': '石家庄', '唐山': '唐山', '保定': '保定', '秦皇岛': '秦皇岛', '衡水': '衡水', '邢台': '邢台', '邯郸': '邯郸', '沧州': '沧州', '丰润': '丰润', '承德': '承德', '新城': '新城', '张家口': '张家口', '廊坊': '廊坊' }
        },
        "山西省": {
            "key": "山西省",
            "values": { '太原': '太原', '大同': '大同', '长治': '长治', '阳泉': '阳泉', '离石': '离石', '析州地区': '析州地区', '宁武': '宁武', '临汾地区': '临汾地区', '候马': '候马', '运城地区': '运城地区', '晋城': '晋城', '榆次': '榆次', '朔州': '朔州' }
        },
        "内蒙古自区": {
            "key": "内蒙古自区",
            "values": { '呼和浩特': '呼和浩特', '包头': '包头', '赤峰': '赤峰', '乌海': '乌海', '临河': '临河', '通辽': '通辽', '集宁': '集宁', '锡林浩特': '锡林浩特', '海拉尔': '海拉尔', '东胜': '东胜', '乌兰浩特': '乌兰浩特', '阿拉善盟': '阿拉善盟' }
        },
        "辽宁省": {
            "key": "辽宁省",
            "values": { '沈阳': '沈阳', '大连': '大连', '鞍山': '鞍山', '抚顺': '抚顺', '丹东': '丹东', '辽阳': '辽阳', '营口': '营口', '本溪': '本溪', '锦州': '锦州', '朝阳': '朝阳', '盘锦': '盘锦', '阜新': '阜新', '铁岭': '铁岭', '葫芦岛': '葫芦岛' }
        },
        "吉林省": {
            "key": "吉林省",
            "values": { '长春': '长春', '吉林': '吉林', '四平': '四平', '辽源': '辽源', '通化': '通化', '白城': '白城', '白山': '白山', '松原': '松原', '梅河口': '梅河口', '珲春': '珲春', '延吉': '延吉' }
        },
        "黑龙江省": {
            "key": "黑龙江省",
            "values": { '哈尔滨': '哈尔滨', '齐齐哈尔': '齐齐哈尔', '大庆': '大庆', '牡丹江': '牡丹江', '鸡西': '鸡西', '伊春': '伊春', '佳木斯': '佳木斯', '北安': '北安', '大兴安岭': '大兴安岭', '鹤岗': '鹤岗', '双鸭山': '双鸭山', '七台河': '七台河', '绥化': '绥化', '黑河': '黑河' }
        },
        "江苏省": {
            "key": "江苏省",
            "values": { '南京': '南京', '苏州': '苏州', '无锡': '无锡', '扬州': '扬州', '连云港': '连云港', '镇江': '镇江', '常州': '常州', '徐州': '徐州', '淮阴': '淮阴', '南通': '南通', '盐城': '盐城', '泰州': '泰州', '常熟': '常熟', '沭阳': '沭阳' }
        },
        "浙江省": {
            "key": "浙江省",
            "values": { '杭州': '杭州', '宁波': '宁波', '温州': '温州', '嘉兴': '嘉兴', '绍兴': '绍兴', '湖州': '湖州', '定海': '定海', '临海': '临海', '金华': '金华', '义乌': '义乌', '丽水': '丽水', '衢州': '衢州', '瓯海': '瓯海', '舟山': '舟山', '台州': '台州' }
        },
        "安徽省": {
            "key": "安徽省",
            "values": { '合肥': '合肥', '淮南': '淮南', '芜湖': '芜湖', '蚌埠': '蚌埠', '淮化': '淮化', '阜阳': '阜阳', '六安': '六安', '巢湖': '巢湖', '滁州': '滁州', '宣城': '宣城', '屯溪': '屯溪', '安庆': '安庆', '淮北': '淮北', '铜陵': '铜陵', '马鞍山': '马鞍山', '黄山': '黄山', '宿州': '宿州', '贵池地区': '贵池地区' }
        },
        "福建省": {
            "key": "福建省",
            "values": { '福州': '福州', '厦门': '厦门', '泉州': '泉州', '漳州': '漳州', '南平': '南平', '邵武': '邵武', '福安': '福安', '龙岩': '龙岩', '三明': '三明', '永安': '永安', '莆田': '莆田', '宁德地区': '宁德地区' }
        },
        "江西省": {
            "key": "江西省",
            "values": { '南昌': '南昌', '九江': '九江', '赣州': '赣州', '鹰潭': '鹰潭', '上饶': '上饶', '景德镇': '景德镇', '井冈山': '井冈山', '萍乡': '萍乡', '新余': '新余', '宜春地区': '宜春地区', '抚州地区': '抚州地区', '吉安地区': '吉安地区' }
        },
        "山东省": {
            "key": "山东省",
            "values": { '济南': '济南', '青岛': '青岛', '烟台': '烟台', '淄博': '淄博', '德州': '德州', '东营': '东营', '潍坊': '潍坊', '泰安': '泰安', '兖州': '兖州', '菏泽': '菏泽', '地区': '地区', '临沂': '临沂', '薛城': '薛城', '枣庄': '枣庄', '威海': '威海', '济宁': '济宁', '日照': '日照', '莱芜': '莱芜', '滨州地区': '滨州地区', '聊城': '聊城' }
        },
        "河南省": {
            "key": "河南省",
            "values": { '郑州': '郑州', '洛阳': '洛阳', '开封': '开封', '平顶山': '平顶山', '安阳': '安阳', '许昌': '许昌', '信阳': '信阳', '周口地区': '周口地区', '商丘': '商丘', '焦作': '焦作', '鹤壁': '鹤壁', '新乡': '新乡', '濮阳': '濮阳', '漯河': '漯河', '三门峡': '三门峡', '潢川': '潢川', '驻马店': '驻马店', '南阳': '南阳' }
        },
        "湖北省": {
            "key": "湖北省",
            "values": { '武汉': '武汉', '宜昌': '宜昌', '襄樊': '襄樊', '黄石': '黄石', '荆州': '荆州', '仙桃': '仙桃', '咸宁': '咸宁', '襄阳': '襄阳', '恩施': '恩施', '十堰': '十堰', '潜江': '潜江', '荆门': '荆门', '鄂州': '鄂州', '随州': '随州', '孝感': '孝感', '黄岗': '黄岗' }
        },
        "湖南省": {
            "key": "湖南省",
            "values": { '长沙': '长沙', '衡阳': '衡阳', '株洲': '株洲', '湘潭': '湘潭', '益阳': '益阳', '邵阳': '邵阳', '吉首': '吉首', '娄底': '娄底', '怀化': '怀化', '郴州': '郴州', '永州': '永州', '岳阳': '岳阳', '常德': '常德', '张家界': '张家界' }
        },
        "广西自区": {
            "key": "广西自区",
            "values": { '南宁': '南宁', '柳州': '柳州', '桂林': '桂林', '北海': '北海', '梧州': '梧州', '百色': '百色', '钦州': '钦州', '玉林': '玉林', '防城港': '防城港', '河池': '河池' }
        },
        "海南省": {
            "key": "海南省",
            "values": { '海口': '海口', '三亚': '三亚', '通什': '通什', '儋县': '儋县' }
        },
        "重庆市": {
            "key": "重庆市",
            "values": { '重庆市': '重庆市', '长寿': '长寿', '达洲': '达洲', '合川': '合川', '江津': '江津', '乐山': '乐山', '黔江': '黔江', '荣昌': '荣昌', '中江': '中江', '忠县': '忠县' }
        },
        "四川省": {
            "key": "四川省",
            "values": { '成都': '成都', '自贡': '自贡', '宜宾': '宜宾', '内江': '内江', '乐山': '乐山', '西昌': '西昌', '攀枝花': '攀枝花', '德阳': '德阳', '绵阳': '绵阳', '汶川': '汶川', '马尔康': '马尔康', '雅安地区': '雅安地区', '康定': '康定', '达安地区': '达安地区', '南充': '南充', '泸州': '泸州', '涪陵': '涪陵', '广元': '广元', '遂宁': '遂宁', '广安': '广安', '巴中地区': '巴中地区' }
        },
        "贵州省": {
            "key": "贵州省",
            "values": { '贵阳': '贵阳', '遵义': '遵义', '六盘水': '六盘水', '安顺': '安顺', '玉屏': '玉屏', '凯里': '凯里', '都匀': '都匀', '铜仁': '铜仁', '毕节': '毕节', '兴义': '兴义' }
        },
        "云南省": {
            "key": "云南省",
            "values": { '昆明': '昆明', '东川': '东川', '个旧': '个旧', '大理': '大理', '昭通地区': '昭通地区', '开远': '开远', '文山自治州': '文山自治州', '思茅地区': '思茅地区', '楚雄自治州': '楚雄自治州', '临沧地区': '临沧地区', '保山地区': '保山地区', '曲靖': '曲靖', '玉溪': '玉溪', '丽江地区': '丽江地区', '景洪': '景洪', '潞西': '潞西', '六库': '六库', '中甸': '中甸' }
        },
        "西藏自区": {
            "key": "西藏自区",
            "values": { '拉萨': '拉萨', '日喀则': '日喀则', '那曲地区': '那曲地区', '昌都地区': '昌都地区', '阿里地区': '阿里地区', '山南地区': '山南地区', '林芝地区': '林芝地区' }
        },
        "陕西省": {
            "key": "陕西省",
            "values": { '西安': '西安', '咸阳': '咸阳', '宝鸡': '宝鸡', '延安': '延安', '渭南': '渭南', '绥德': '绥德', '榆林地区': '榆林地区', '汉中': '汉中', '安康地区': '安康地区', '商州地区': '商州地区', '铜川': '铜川' }
        },
        "甘肃省": {
            "key": "甘肃省",
            "values": { '兰州': '兰州', '天水': '天水', '白银': '白银', '金昌': '金昌', '敦煌': '敦煌', '张掖地区': '张掖地区', '酒泉': '酒泉', '平凉地区': '平凉地区', '西峰': '西峰', '甘南州': '甘南州', '定西地区': '定西地区', '武都': '武都', '临夏自治州': '临夏自治州' }
        },
        "青海省": {
            "key": "青海省",
            "values": { '西宁': '西宁', '格尔木': '格尔木', '德令哈': '德令哈', '共和': '共和', '玉树自治州': '玉树自治州', '海东地区': '海东地区', '同仁': '同仁', '玛沁': '玛沁', '海晏': '海晏' }
        },
        "宁夏自区": {
            "key": "宁夏自区",
            "values": { '银川': '银川', '石嘴山': '石嘴山', '吴忠': '吴忠', '固源地区': '固源地区' }
        },
        "新疆自区": {
            "key": "新疆自区",
            "values": { '乌鲁木齐': '乌鲁木齐', '克拉玛依': '克拉玛依', '石河子': '石河子', '伊宁': '伊宁', '喀什': '喀什', '东山': '东山', '吐鲁番': '吐鲁番', '哈密': '哈密', '库尔勒': '库尔勒', '库车': '库车', '阿克苏': '阿克苏', '和田': '和田', '阿图什': '阿图什', '昌吉自治州': '昌吉自治州', '博乐': '博乐', '奎屯': '奎屯', '塔城地区': '塔城地区', '阿勒泰地区': '阿勒泰地区' }
        }
    };
    $('#selectProvince').doubleSelect('selectCity', selectOption);


}



//添加点击函数
function init() {

    //点击图片
    $("#picture").click(function () {
        regist = getRandomString(4);
        $("#picture").attr("value", regist);
        hideDivWrongMessage();

    });


    //点击按钮
    $("#btnSearch").click(function () {

        messageNotShow = true;

        //手机号码
        checkMobile();
        //邮箱
        checkEmail();
        //用户名
        checkName();
        //地址
        checkAddress();
        //密码
        checkPassword();
        //确认密码
        checkRuquiredPassword();
        //图片验证码
        checkPictureRegistID();
        //同意协议
        checkAgreeMessage();


        $("div.divForWrongMessage").css("display", "none");

        if (messageNotShow == false) {

            //显示错误信息
            showDivWrongMessage()
            return false;
        }
        return true;
    });

}

//隐藏右侧错误DIV
function hideDivWrongMessage() {
    if (!($("#divWrongMessage").is(":hidden"))) {
        $("#divWrongMessage").slideUp("slow");
    }
}

//显示右侧错误DIV
function showDivWrongMessage() {
    if ($("#divWrongMessage").is(":hidden")) {
        $("#divWrongMessage").slideDown("slow");
    }
}


//生成隐藏的DIV
function initDisplay() {

    view("inputPhone", "pPhone");
    view("inputEmail", "pEmail");
    view("inputName", "pName");
    view("inputAddress", "pAddress");
    view("inputPassword", "pPassword");
    view("inputRuquiredPassword", "pRuquiredPassword");
    view("inputPictureRegist", "pPictureRegist");
    view("inputAgreeMessage~a", "pAgreeMessage");

}

//给Input添加change函数
function initForChange() {
    //手机号码
    $("#inputPhone").bind("change", function () {
        Nochange = false;
        hideDivWrongMessage();
        checkMobile();
    });

    //邮箱
    $("#inputEmail").bind("change", function () {
        Nochange = false;
        hideDivWrongMessage();
        checkEmail();
    });
    //用户名
    $("#inputName").bind("change", function () {
        Nochange = false;
        hideDivWrongMessage();
        checkName();
    });

    //地址
    $("#inputAddress").bind("change", function () {
        Nochange = false;
        hideDivWrongMessage();
        checkAddress();
    });
    //密码
    $("#inputPassword").bind("change", function () {
        Nochange = false;
        hideDivWrongMessage();
        checkPassword();
    });
    //确认密码
    $("#inputRuquiredPassword").bind("change", function () {
        Nochange = false;
        hideDivWrongMessage();
        checkRuquiredPassword();
    });
    //图片验证码
    $("#inputPictureRegist").bind("change", function () {
        Nochange = false;
        hideDivWrongMessage();
        checkPictureRegistID();
    });
    //同意协议
    $("#inputAgreeMessage").bind("change", function () {
        Nochange = false;
        hideDivWrongMessage();
        checkAgreeMessage();
    });



}

//验证手机号码;
function checkMobile() {
    var booleanPhone = check_mobile("inputPhone");
    messageNotShow = messageNotShow && booleanPhone;
    if (booleanPhone == true) {
        $("#divWrongMessage > #pPhone").css("display", "none");
        $("#divFor" + "pPhone").css("display", "none");
    } else {
        $("#divWrongMessage > #pPhone").css("display", "block");
        $("div.divForWrongMessage").css("display", "none");
        $("#divFor" + "pPhone").css("display", "block");
    }
}

//验证邮箱格式;
function checkEmail() {

    var booleanEmail = check_email("inputEmail");
    messageNotShow = messageNotShow && booleanEmail;
    if (booleanEmail == true) {
        $("#divWrongMessage > #pEmail").css("display", "none");
        $("#divFor" + "pEmail").css("display", "none");
    } else {
        $("#divWrongMessage > #pEmail").css("display", "block");
        $("div.divForWrongMessage").css("display", "none");
        $("#divFor" + "pEmail").css("display", "block");
    }

}

//验证名字是否为空;
function checkName() {

    var booleanName = check_name("inputName");
    messageNotShow = messageNotShow && booleanName;
    if (booleanName == true) {
        $("#divWrongMessage > #pName").css("display", "none");
        $("#divFor" + "pName").css("display", "none");
    } else {
        $("#divWrongMessage > #pName").css("display", "block");
        $("div.divForWrongMessage").css("display", "none");
        $("#divFor" + "pName").css("display", "block");
    }
}

//验证收货地址是否为空;
function checkAddress() {

    var booleanAddress = check_Address("inputAddress");
    messageNotShow = messageNotShow && booleanAddress;
    if (booleanAddress == true) {
        $("#divWrongMessage > #pAddress").css("display", "none");
        $("#divFor" + "pAddress").css("display", "none");
    } else {
        $("#divWrongMessage > #pAddress").css("display", "block");
        $("div.divForWrongMessage").css("display", "none");
        $("#divFor" + "pAddress").css("display", "block");
    }
}

//验证密码是否为空;
function checkPassword() {

    var booleanPassword = check_password("inputPassword");
    messageNotShow = messageNotShow && booleanPassword;
    if (booleanPassword == true) {
        $("#divWrongMessage > #pPassword").css("display", "none");
        $("#divFor" + "pPassword").css("display", "none");

    } else {
        $("#divWrongMessage > #pPassword").css("display", "block");
        $("div.divForWrongMessage").css("display", "none");
        $("#divFor" + "pPassword").css("display", "block");
    }

    checkRuquiredPassword();

}

//验证确认密码是否正确;
function checkRuquiredPassword() {

    var booleanRquiredPassword = check_ruquiredPassword("inputPassword", "inputRuquiredPassword");
    messageNotShow = messageNotShow && booleanRquiredPassword;
    if (booleanRquiredPassword == true) {
        $("#divWrongMessage > #pRuquiredPassword").css("display", "none");
        $("#divFor" + "pRuquiredPassword").css("display", "none");
    } else {
        $("#divWrongMessage > #pRuquiredPassword").css("display", "block");
        $("div.divForWrongMessage").css("display", "none");
        $("#divFor" + "pRuquiredPassword").css("display", "block");
    }

}

//验证图片验证码是否正确;
function checkPictureRegistID() {
    var booleanPictureRegist = check_pictureRegistID("picture", "inputPictureRegist");
    messageNotShow = messageNotShow && booleanPictureRegist;
    if (booleanPictureRegist == true) {
        $("#divWrongMessage > #pPictureRegist").css("display", "none");
        $("#divFor" + "pPictureRegist").css("display", "none");
    } else {
        $("#divWrongMessage > #pPictureRegist").css("display", "block");
        $("div.divForWrongMessage").css("display", "none");
        $("#divFor" + "pPictureRegist").css("display", "block");
    }
}

//验证是否同意协议;
function checkAgreeMessage() {
    var booleanAgreeMessage = check_agreeMessage("inputAgreeMessage");
    messageNotShow = messageNotShow && booleanAgreeMessage;
    if (booleanAgreeMessage == true) {
        $("#divWrongMessage > #pAgreeMessage").css("display", "none");
        $("#divFor" + "pAgreeMessage").css("display", "none");
    } else {
        $("#divWrongMessage > #pAgreeMessage").css("display", "block");
        $("div.divForWrongMessage").css("display", "none");
        $("#divFor" + "pAgreeMessage").css("display", "block");
    }

}


//验证是否同意协议 
function check_agreeMessage(agreeMessageID) {

    return $("#" + agreeMessageID).prop("checked");
}


//验证确认密码是否正确 
function check_pictureRegistID(pictureID, inputPictureRegistID) {

    var str1 = $("#" + pictureID).val().trim().toLocaleLowerCase();
    var str2 = $("#" + inputPictureRegistID).val().trim().toLocaleLowerCase();


    if (str2 != "" && (str1 == str2)) {
        return true;
    }
    return false;
}

//验证确认密码是否正确 
function check_ruquiredPassword(passwordID, RpasswordID) {
    var str1 = $("#" + passwordID).val().trim();
    var str2 = $("#" + RpasswordID).val().trim();
    if (str2 != "" && (str1 == str2)) {
        return true;
    }
    return false;
}



//验证密码是否为空 
function check_password(passwordID) {
    var str = $("#" + passwordID).val().trim();
    //var reg = /^[\u0391-\uFFE5]+$/;
    //if (str != "" && reg.test(str)) {
    if (str != "") {
        return true;
    }
    return false;
}

//验证收货地址是否为空 
function check_Address(addressID) {
    var str = $("#" + addressID).val().trim();
    //var reg = /^[\u0391-\uFFE5]+$/;
    //if (str != "" && reg.test(str)) {
    if (str != "") {
        return true;
    }
    return false;
}


//验证名字是否为空 
function check_name(nameID) {
    var str = $("#" + nameID).val().trim();
    //var reg = /^[\u0391-\uFFE5]+$/;
    //if (str != "" && reg.test(str)) {
    if (str != "") {
        return true;
    }
    return false;
}


//验证邮箱格式 
function check_email(emailID) {
    var str = $("#" + emailID).val().trim();
    var reg = /^[a-zA-Z0-9_-]+(\.([a-zA-Z0-9_-])+)*@[a-zA-Z0-9_-]+[.][a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*$/;
    if (str != "" && reg.test(str)) {
        return true;
    }
    return false;
}



//检查手机号码
function check_mobile(mobile) {

    var str = $("#" + mobile).val().trim();

    if (str.length != 11 || isNaN(str)) {
        return false;
    }
    str = str.substr(0, 3);
    //号段
    var hd = new Array('130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189');
    var i = hd.length;
    while (i--) {
        if (hd[i] == str) {
            return true;
        }
    }
    return false;
}


// 获取长度为len的随机字符串  
function getRandomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1  
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}


//生成小DIV显示错误信息
function view(inputID, pID) {
    var X = $('#' + inputID).offset().top;
    var Y = $('#' + inputID).offset().left + $('#' + inputID).width();
    var divProdct = $('<div id= divFor' + pID + ' class=divForWrongMessage style="height:31px;width:231px;padding-top:13px;padding-left:38px; background-image:url(images/boeder2233.png);" ></div>');
    divProdct.css({ "top": X, "left": Y, "position": "absolute", "display": "none" });
    divProdct.appendTo($("body"));
    divProdct.append($("#divWrongMessage > #" + pID).text());
}

