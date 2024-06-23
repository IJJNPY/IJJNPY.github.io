var now1 = new Date();

function createtime1() {
    var grt = new Date("08/09/2022 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `Welcome to IJJNPY's Home
        `,
        `                                                                                                      
                                                                                                                   
IIIIIIIIII          JJJJJJJJJJJ        JJJJJJJJJJJNNNNNNNN        NNNNNNNNPPPPPPPPPPPPPPPPP   YYYYYYY       YYYYYYY
I::::::::I          J:::::::::J        J:::::::::JN:::::::N       N::::::NP::::::::::::::::P  Y:::::Y       Y:::::Y
I::::::::I          J:::::::::J        J:::::::::JN::::::::N      N::::::NP::::::PPPPPP:::::P Y:::::Y       Y:::::Y
II::::::II          JJ:::::::JJ        JJ:::::::JJN:::::::::N     N::::::NPP:::::P     P:::::PY::::::Y     Y::::::Y
  I::::I              J:::::J            J:::::J  N::::::::::N    N::::::N  P::::P     P:::::PYYY:::::Y   Y:::::YYY
  I::::I              J:::::J            J:::::J  N:::::::::::N   N::::::N  P::::P     P:::::P   Y:::::Y Y:::::Y   
  I::::I              J:::::J            J:::::J  N:::::::N::::N  N::::::N  P::::PPPPPP:::::P     Y:::::Y:::::Y    
  I::::I              J:::::j            J:::::j  N::::::N N::::N N::::::N  P:::::::::::::PP       Y:::::::::Y     
  I::::I              J:::::J            J:::::J  N::::::N  N::::N:::::::N  P::::PPPPPPPPP          Y:::::::Y      
  I::::I  JJJJJJJ     J:::::JJJJJJJJ     J:::::J  N::::::N   N:::::::::::N  P::::P                   Y:::::Y       
  I::::I  J:::::J     J:::::JJ:::::J     J:::::J  N::::::N    N::::::::::N  P::::P                   Y:::::Y       
  I::::I  J::::::J   J::::::JJ::::::J   J::::::J  N::::::N     N:::::::::N  P::::P                   Y:::::Y       
II::::::IIJ:::::::JJJ:::::::JJ:::::::JJJ:::::::J  N::::::N      N::::::::NPP::::::PP                 Y:::::Y       
I::::::::I JJ:::::::::::::JJ  JJ:::::::::::::JJ   N::::::N       N:::::::NP::::::::P              YYYY:::::YYYY    
I::::::::I   JJ:::::::::JJ      JJ:::::::::JJ     N::::::N        N::::::NP::::::::P              Y:::::::::::Y    
IIIIIIIIII     JJJJJJJJJ          JJJJJJJJJ       NNNNNNNN         NNNNNNNPPPPPPPPPP              YYYYYYYYYYYYY    
                                                                                                                   
                                                                
`,
        "小站已经苟活",
        dnum,
        "天啦!",
        "©2024 By IJJNPY",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            ""
        )
    );
}

createtime1();

function createtime2() {
    setTimeout(
        console.warn.bind(
            console,
            "%c ⚡ Powered by IJJNPY %c 你正在访问IJJNPYの小家",
            "color:white; background-color:#f0ad4e",
            ""
        )
    );

    setTimeout(console.warn.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
    setTimeout(
        console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
    );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };