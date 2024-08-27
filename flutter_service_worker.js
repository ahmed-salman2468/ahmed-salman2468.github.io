'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2a685d576d41b9c29003b1b822a20341",
"version.json": "bac40db0904e7dfbc0ecabf69add18a0",
"favicon.ico": "afdada28a73e5269dcfd16e60d0aa435",
"index.html": "8e148256b61363190ca5a89167ea0188",
"/": "8e148256b61363190ca5a89167ea0188",
"flutter_script.js": "02869b191df2ce83d89975a39afc72eb",
"main.dart.js": "e9f71776485d2a2026c0958ee4d5a3d6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/apple-touch-icon.png": "d14ff66cda5470a01af3a14b4d86cec3",
"icons/icon-192.png": "62ee5f6ca09a36a591adb9446445e56e",
"icons/icon-192-maskable.png": "db76ed2b7becc00a607c0baadc21e422",
"icons/icon-512-maskable.png": "870d7d1aa9e409544ec4b8c3a04e5c4a",
"icons/icon-512.png": "9455760091307f9991a0ef3b77fc5573",
"style.css": "f490b25846416301133ff4fe80eff9fc",
"manifest.json": "1c2da69e98cce149264a8b6b23438a83",
".git/config": "50bda67012eb4197ba2a6cfc7ccbe0bf",
".git/objects/61/0b7a9bb72d031552802618d77d58f8ab2b61d0": "4f4ecfa5cba69c794099eee9ad1b5390",
".git/objects/95/6a5cef833e3843f90201ba9c870e821c05007f": "de2c5af874548947a544573d18e663ce",
".git/objects/95/5d1dcbb4f38c94067c8a349c5d36323d4236aa": "c0ea479572cde9221273e1de4604d70b",
".git/objects/92/2ca315b8e4dff7e5af901fda6295c6ef19441d": "3700162f11d7564b8bd91699d56a4f0b",
".git/objects/0c/06de22b39bce7af251f2b2b2c8618a005422a0": "84aa6964881d30abc52458ae5653e73d",
".git/objects/3e/150d9a1e66cbd1cf05d8ac746f7ee45ab8ac25": "7811c56c47b2057790fac2365879a0f4",
".git/objects/50/292175920fad25f48a76217b39a022ae75dca7": "47838ff032656a12b93c4b7b543b3ec2",
".git/objects/50/3e3b499c44f80088663beb6213edad30abf26f": "a5941f27f1bcb0e71266fb440288f97d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/f9c6833aa486c765537e8625da87eb8f964380": "ef068869ffd8fd91f717c720cf84c345",
".git/objects/04/52dc34b3bf0f7686ac44b2b0a1dce0e0e83dd9": "75104f970e6f0765b67723f8f1b6c71f",
".git/objects/6a/adbaedf65751bd8a507b68e82f446fd1adfc7b": "1d69dfaa7dfed4de1078e2942853d7fb",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/d7b0b2abb6d9569d2f8ad79f4c889f4c961585": "0f90dc86485ea3a51b3934d5419e9fd5",
".git/objects/3c/a247bd48c7ac032cd76cf049ddd291964de559": "d01de0642301ebbc94e7e597e42a446a",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/56/147a01d4686e3e15b27e0533509e7a739715bf": "68a11724757ff353403f03c90ac38141",
".git/objects/56/cbec5e546910e951aebc42d2e99469c9faf4b0": "6a0daa1d7be0b8c9de67f892401c9958",
".git/objects/51/2230c961d0f3db2f1495adeb0c0c97b3ecfb67": "8a805057053f556a8a7be41b9e8c502b",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/f8edaa3836cef661e8c48453a8bddace8830bc": "9a16b42e3d8fbf01b962cf9c3a947608",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/4058c38e81a344a40c6ee0a1a73672d327f124": "2c8ee347c16901c40c1090b95ef0ca04",
".git/objects/34/c3c0401bfc62ed70fca447cf61df939e67e9f3": "ca6f62d03b2a41385945ed4cf3ff980d",
".git/objects/34/267841c50e216b16fdfc71babe3cbcc620ba6e": "5473379ae5a81c0bb46f355d8e535891",
".git/objects/5a/e70ed605399996d18915b639f214e3f440e5ba": "39f8512e6c49d85b56e534ef8890571c",
".git/objects/33/5c90be077cc8f1354f34283e58fa246da76932": "dc989e59490811deeaeeb7706727976b",
".git/objects/9c/e3015fb97a115f0452409567a96b01aab2207e": "1f7eea8081f9b262ce648bbc9e598b8c",
".git/objects/9c/68d03d23d0a139bacbc6f7eb6bc7934412c3d1": "c64d1361ad62712aee2d26c110adb2ce",
".git/objects/02/810008362d31f28fbea56fa9f4b8f6e325f29b": "b717acba1e6998cd80d35f53957f0859",
".git/objects/02/bc111ce4748963627fc0a505ebc48395e77589": "d8c26e0ef7844c465550a80f7c0e2869",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/02/c5dd99e0739fad33784fe06eaed8bd74998c1a": "9fe61507be0a683b395bd32c25949b7a",
".git/objects/ad/a003d5a2eed7ad7b71772b0bd5908cc7115e3b": "bc7b53bea50e12cb2ddf64fd7e77526d",
".git/objects/ad/067c3e4952c6c27dcd52a5a48b93e60e8adcb7": "9db5f3a4bdbdb3358c379eef020f3ed1",
".git/objects/ad/54e6864dbaae755d52b5ca64cc61496d077acb": "af94d4446a3a46335e97dc15f45bac16",
".git/objects/bb/67ad9c28f7e97bc2d55ff740b2f0c600a6bdd3": "3ff1cf051f460c5f2f23161d3f9c83aa",
".git/objects/d0/e34485bd3b0447efeb9ba8cca97a66d1198b7e": "deff9d21697406fdd33ba93fffca516c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/47d6d4f173117214fa470a18a7c3faf0ab7811": "efe855c6461c713180f7e7529d528703",
".git/objects/df/a8628aef07a1c6782e5c3e38a544ba9479c81a": "bf34a5577a693dc8b84d5ec64d0cbfec",
".git/objects/a2/ecce82860468a4b2cbd3bed71eef5638913aa0": "4ba0c99f18b829d324c300301c11d2b3",
".git/objects/a2/5ac5ffbea023af31766cc1b9c3135b21181749": "4542bb5157db47a51a5b709896edf800",
".git/objects/a2/f6a3f9cec82a10cc2b0605ffa9b5fe9babddbc": "b6e7ea02eaf9ebf67e6041a80dcea721",
".git/objects/a5/39cc90e01f607cb7f4ec92b57988c4163c8a6a": "1c790a8300f03bbd9be22e178faf35eb",
".git/objects/d1/121b74e1aa4af60b811b70c0afe66d70d53218": "e02d6a03828402c53d88cf9ee4ee168c",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/ae/02922e03ab06d253f0c28652d0dd8899beee83": "9a5916222bcfc416e5eac7f2eda2a46d",
".git/objects/e2/583ca5df22c4fe7a3f5cda315c9a65328c75d8": "f0063a448a826d26bfa99dc68937091d",
".git/objects/e2/e2483f9fe4517738fcc203ee655275c313cbb3": "6a77036fbe9c210a7ad923df6fd4822c",
".git/objects/eb/8f5454c406746ef18e32a78d3ffebca130a91e": "0db89f055e4b6eab168be9f06d8197a3",
".git/objects/eb/35a5f2250d0c45d6e019d682287d75e3d1be7e": "6252990b036cbabe94cdd525c4884719",
".git/objects/eb/e34a873120a62c7ecfc81c0535ba1347ae2919": "431361adb528d2ea7a2ef535e49e7999",
".git/objects/ee/a7588ebe7a80345b7e10232fdc417cb332a6c5": "e6f135eaf837b8a30dc94f6961572af9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/9c74c0ed52592bff7691080fed02570a0fac36": "c93adc54e07d9ece1dd33af3e1e3a66d",
".git/objects/e4/81813859bc126d906c4bbe9048da21a77f5b6d": "1fcbce55f5b4468421fe3d31219d5c6f",
".git/objects/c8/686596dded212a9d2691e535b605dca63120b9": "2ed4e8e7a2cd11f9316b0772dc864e7f",
".git/objects/fb/5c6ca66637004e4bfa68842d178289d4c24be1": "a550c3b0f2bdc22670787d28828a85d0",
".git/objects/c6/c7922af825dfaa7da83e9135d5e5bcb1aee0d6": "b7e528242d249bbe71043ac32927d894",
".git/objects/4e/3324c6104790bd4cfaf5d5b0f985edd6051d8e": "8a86755eaad2f4a3bf08bc95816950e0",
".git/objects/4e/908ff711422f3c8d988b8fb36863af69150a96": "72e9f1942df7d8b95a9a992f8fd19ac0",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/0c10375c1a85840d8b66bcc15901e09cde4d79": "43733decdbc3c70b7909e5cfc4aadaeb",
".git/objects/4b/5bc6b06d733992e4d1b0f6d52bc9def5efb6d6": "6189936ae0afc64b8230f5a3c012703a",
".git/objects/7d/5445b78e23969c2cc1f5c34bdf3150a3cc902a": "2178937286fbcf027be26cc7b28b7202",
".git/objects/7d/65212a284ea71f9b678a3403a86de349f7a872": "124db1b64c4ce0d35a38b7a6c7e7368b",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/c8d5afd1a5eee00d7c4925436f63ecf257f678": "1fa919e982e7f06e7d5eb60b8eac8e79",
".git/objects/42/17bc3dadd42e6f86c7759681d9b053f9936054": "1f3f6514de7fc37efa65d8706300bb06",
".git/objects/45/b9381ad895cf5620df5cf4cda79a14cc25ec6f": "f3b8f7b1e5a2043f9ccdbdfa67d359dc",
".git/objects/45/fd4a443c65b405fc87a423fb7887da11665d9d": "b7e7b5232e015966acb4666e766c710a",
".git/objects/1f/37d85471cdec143633d4e701784152d9e3b501": "0d7a704a5bcd05ecd64c64f4bc9f3015",
".git/objects/1f/01306ff4ced50f1280a08746e41fd15e73f23a": "b979a8e403ccf957a07dd11d6e21bd77",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/38310d397b45ca559a6f66a34c75766b10fced": "bfaf74ee0807c602188884d8a998f29f",
".git/objects/1a/8f0b03784257f03e3a58dd5a45a5e05f186d5f": "c96edaf682c20e863e98b49e8228ceca",
".git/objects/1a/74392e061c9fb6e267241eb126821991d67467": "a35488015e60dd820406e8c4c46132e6",
".git/objects/17/93160fe3c4e6a75054aa761f4884d83aacc0ad": "c72497ac9bcc0dece454bd7615e1c004",
".git/objects/7b/2c31ee2653298996d4a6f84da5ba6f1a68da56": "9361d1fe84fd0b8744a480a9df466206",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/8d58484c888492f4296ecf93bf483588b67179": "82ccfc61a3a8048256abc7cc43595560",
".git/objects/8a/cb9a379128c3a84a466aa5d7ca5c3a7144f096": "b404cc5dddf1ea1ad168fc97479bdef5",
".git/objects/8a/1086f1b30734b0ea143d2ae69e15c542db5b85": "3050180eb864f10cebe854d2457a1964",
".git/objects/19/7d6c1d69b3b056dd32af5b8820278003c898a2": "9d5139a739aedec6fadf3dc23fd42bfb",
".git/objects/21/2774ee5d0dd91bc104d64780c8dd3f9ce53b9e": "f6ff40f948634806d39d64bb2f410e04",
".git/objects/75/377e040c7689d8c090056f896ebe78a72e6add": "663c59672b40bc151c106050bb987543",
".git/objects/72/381dfcbc0feaa7215548c5fa207a771854c888": "ba1e4826d8a0e1d374172a4c271c270e",
".git/objects/2f/403d3d9ffc1654d19a5ade002f4112a7130c0f": "79ce72013692ac05370583c8e138da68",
".git/objects/2f/6601036aa0349864de3fb924a01036e98c2542": "9e0607a3af7f83a61d1fa49a147a1402",
".git/objects/88/8645e730514defe2d67a25b3a59ecbf92487e7": "896bd63360339653d865fd8db0272c0c",
".git/objects/9f/1a4d070eb6ca5fb072f1d7d47b5cb81210eb76": "e447509443fe2c056aab8e52c312ca31",
".git/objects/07/3bc38490dc137303e154e75bd954afe8fe766e": "caa7728dfa8333c58f7b268996f2eaec",
".git/objects/07/d32622c1eaea69b7821f3fe7f80e38c32bf723": "8cec4c02ea2da8826575f88733c7e8ba",
".git/objects/00/4f8699d0eb517514521e4277ca2051f43ea9e5": "4b6c6a50ad431a36d648864cb1b0a7d6",
".git/objects/00/034eca08375db30aad317bb33a7bd87b454ce2": "8e81346b85d0c289b80b0e0c6ae2820c",
".git/objects/6e/7b72cf917714e8db8f278a88ee6581783fda2f": "a9efdf39f20fccb5ee264e43457fc50f",
".git/objects/6e/8638c20f71b1a8f5df04232ae1276c03f74991": "5c8d110c406debfce30c5179f5a9efab",
".git/objects/9a/ee211633396f2d45328caa6c253acd692cd2d0": "c7821c77ce2feb020302216f6957c9d3",
".git/objects/36/1e564290fb3e7f7c49620ee9e3f9732bcf22fc": "e4e7b0ed3633a3efd0634d561a961ca3",
".git/objects/5c/cb5d97ea15b2bb67be20e92e96bc021d7a0287": "1b38562737c8e076882f5efa14a432c2",
".git/objects/09/2e31a9e7a118cfcf3674150d64b55792024783": "4793237b1d2b5837ba2fc73e5ff94e7e",
".git/objects/3a/69230d2cede498b614655d6ac0d47e8761f5e7": "410fa0094c1ea5406604c8d986b23727",
".git/objects/3a/e855b09a59056f3cc730e0545841149a286af5": "027b7e7157ab5ed790b2e88457ecdc9e",
".git/objects/6d/2a4bbdab468994e2744181eeb027db0c716d7f": "4c3c28a82dcfb2699b2631ef39aae09c",
".git/objects/6d/aeab34fb0ed7d9f512a4a8198038ce0d740311": "89b1f1e99d54fda34c000ef9b9190083",
".git/objects/6d/7d2919f898fb176401d2f4298cd0ea35e7e853": "16b606fae597ac9909146949f6e89f9b",
".git/objects/01/6b1003ee235d5d8e163d96de3e152e4a22390e": "d431180c9f912366eedfddacfb448179",
".git/objects/6c/bbc5a5cb725eeee60a536c005d86865fab4d4a": "db73d777af122ad8d639665c030e424a",
".git/objects/6c/d638088514b88a4a22ba624956100daf87f985": "6c7a999635511b79a3360754f097fa2e",
".git/objects/39/6b6f6d1fb0bc0a3df913d6a63747b35a6f093d": "367ff5ff0c8a4d51585ceff889fc8aa9",
".git/objects/39/9ba4e809d5c0bcaec6c193b458a7ff03e1b852": "27ba32ec5a0658cea7bc1e5149e1e100",
".git/objects/99/13ccc04982f372d03fb0e7d9d795428110e70a": "d45c7e17ccd0b5e7170cb422c40209dc",
".git/objects/97/0ac547406905edfad78d49834d8e762838beaf": "6966e9c2786744df66e164c3f3715285",
".git/objects/97/5d746eb0fc72e3d22101c1b9ad561e8e86a78c": "fad44c4dd8f095381ae51306c1dcfa29",
".git/objects/97/d791d3b9796d70dbf03a646c55d91899d1524d": "7fc664e1ec4072b6f791a6b33ee609da",
".git/objects/63/00a8d166c90e5a7c7760531cc02e352a4bad28": "a240347e09f1796a3a8ca3133f1ddea2",
".git/objects/0f/6128d37e32fb7b74ba15a53e79d1fe014c5cfa": "df85b26a645e95c3883ac17b29371405",
".git/objects/90/bda12a88a15bf2cf53dcffa5bdea719c996547": "a1769b70c6b11028bab0c34e4729ece6",
".git/objects/d3/6c923c14d875feda8ba90243c3c69d623fe686": "04fb8722bbc4815b3827746e79f13ac0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/60a7fbecca9154243fbae5cc2bca1d20508d0a": "e9f48b403d6119351af040b888132984",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/13abdc1ea856e9709086c25ef8a3d05ba0f743": "b892bdb373cf715728f3e9bd9644a25f",
".git/objects/a0/5ec58003618c3e41f4756d18449cfd57edb997": "cc0c968ac84a8d747cabe2adeb3706e7",
".git/objects/a0/525d95a149f05df6bd44c7420e21d67f867dec": "46733bf37502434144ed83e4cf2b8eaf",
".git/objects/a7/a0e2e8319963c404d1ff2719751399cda240b0": "c8f5d1acc6b4f15c1970c678d5fbecdf",
".git/objects/b1/2967d1c0025c22454ded446eb26c55fd769344": "bf0c7f38f155e370f3800eeed84b5006",
".git/objects/b1/462554cca32eed317d2c114263f9e9c31b3e22": "a7313ef250a070c5ffac0a3aa394759a",
".git/objects/dd/6aaf320eee7fb2fae1cd493952c46fd95db13d": "3f41ab47ad358f48a4c86f3fa4a489c5",
".git/objects/dd/9e2e36de71b05959bb3837c20696d9ef871491": "44d42288f68ce66ad2c34f2ad6669ca4",
".git/objects/aa/9eb39afd1eb56ff459abeafa8155c3d8be5a19": "9fa342b478a1811c283ec09c5cea0b47",
".git/objects/aa/a1e4f1a02a49ee3a76e237c8ba947a0ab055b5": "df0fdb08e076183db2a719e9088f9070",
".git/objects/b7/8ef6350b15645a4caf4e9e2ad0905b817b7ff1": "80016a3d2e5fc7b7c9f3070d15f1eaf0",
".git/objects/b7/01e85848ece0051e4ac054b6845519c79438c0": "999f2b75e7d7f14df3f74b260f1dfb9c",
".git/objects/a8/325de4b1d62eb2543e7f1f47570bb7768f4539": "37c0d62a99b86ad5c9b7eb9b485aa692",
".git/objects/a1/b13e1370e740326537a5aa73c2db55141f2460": "287e8c1362b42ae3c5a3c3c748823140",
".git/objects/c4/bbb79850b100b51356cbb5be01bd39ac8b7bc3": "78f61ab8c8fa7d6e49d284b6cf69a600",
".git/objects/c4/80cbea9c66eb2d0ff01cd50dda56e6bb4da4cb": "4b7ffecb772ba3ef0557868fd9e00c41",
".git/objects/ea/e4e8c2667a4a778339d6f693de739f2b0ef6a7": "479d1010570b230420a7a2f90db1178f",
".git/objects/cd/8afe57d22287ddad6ef74eb4f52fc39a16e5f9": "89de9a5a08f71cda48b5e0804e282d71",
".git/objects/cc/7c30df503241a7388af69931f2791ce014abab": "7c7549fb29e46fbcfc4e2adb30868966",
".git/objects/e6/e62321c242cc9a103c90cf6c52cac4d481cf46": "cbf3324ef136bacc22f8a5d87b408fb6",
".git/objects/f7/43d045b9ae3388b982e0dc594e8456f765ee4d": "b421a44ed63f6f66400b9667bc9215af",
".git/objects/e8/b1f5a5946aa815da342d371cfa84526ac4dae3": "bbcae895d3a1192b7be95b6ad939660a",
".git/objects/c5/4219cbcaefcac961843fa2804f1ddce809eee0": "1293c3dcdfec8fbabfdc05c40e28bb7b",
".git/objects/e9/1229b9c733bbfd65f689b0324a2352e85fec0a": "d6dce9e0d0b2cfe114109955c778f574",
".git/objects/f8/c20bbba7abbe5bc21951f69f1c0e60b0b6b8c8": "d302f974e5afbf7192b9c5ae65022e8f",
".git/objects/e0/839f536aab8fa57e943ab7fb43176c61840667": "45707f720ad71d1fded7e97347376891",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/da341c2b96ab2b041198b00cca768f6df4572a": "9da8dac76b9f7dddc661b846b75156a5",
".git/objects/2c/1bb417914cc64deefda71fa3c81775b5cad250": "2099dbd85bb75f111b25e4917d12fc1d",
".git/objects/1b/004956fcbe10f643a94011287a9a6c72d1fa23": "b3241b840698d5f855711801826f7144",
".git/objects/4a/5b2dfa9e4073a9e4662ed509d6f9ef1410f868": "cd72e9e7ecbe056e010389d90335d272",
".git/objects/4f/b88e1d4ae7dc45a0f75c8111d1dbc8e9c401db": "01c01012bd7f30cbec11dbb75a615a05",
".git/objects/4f/0e852bf48cca87f93158ca3e244d1e80f6d9a1": "5b898a87227357daa3224a4e0529c856",
".git/objects/8d/5b8d2e5d2595b241d817550dcbe752eee369f9": "d933cda91110ee424c9be5c9c143767a",
".git/objects/8d/c1fdeecc83b598ea4d5ca4e45b15fceb616ae5": "6b78e63f9238cb90694af07da3e74731",
".git/objects/12/0f137410c97c96df721c9b9a7e867bc570a339": "385d96240d6ad5cd76a7ab318aa8f0cd",
".git/objects/85/a0b9693f8f23f615f568fb5b4715365c235e8f": "aff4131d2b7c3140db96e89df1bf7cd8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/71/842cd61f5a8c04bf027b569b5319a6483cb632": "d808648f35965df7585102d94adda2a4",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/3b5b5228d4713d8b91a30c17b0dd9bc197cf47": "2acc153ae2310ebe2760e345848a5dce",
".git/objects/1c/13a80be9a9743d784d08c2a64a392bbc0e6b76": "c11b0549a69c0909926a3480bb603ee0",
".git/objects/1c/144e8b639130c7b883b49120e7c41cc3c27e54": "881425d69694c193ae062ac3edd216f4",
".git/objects/82/7215992aa24e366ee9663e1dfdccf522a5466f": "64bed05dd53ba6d72aec3af108817323",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/3ff8ee0f5c327ff0efbb95ebcf8fea1ae335f9": "1a0b68398092f1b66a64470c9e9c3597",
".git/objects/40/23ece12c207c0d4fc354dc1f5552f9fff4614b": "36e868c3c2c55af9bc72e8336d2f561f",
".git/objects/40/c763e123770470ea66cd27c74b0ba8c6dcba79": "5a457d64373ca13074ab6ba8556122b4",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/2e/f67126a985b30f50e20ba19804917645685e1b": "215ed5b445bd43858d8efd97f2cd0717",
".git/objects/2b/371c7995ec986a21a6aae4c5bb812946aa5061": "e4b525ff9953a79cad214767e819e76b",
".git/objects/78/31b46a7c6916bea676a319beb7399a362711a3": "e7815f352b57969d24260185ac657603",
".git/objects/7f/7b8a0e2901c415de2a707090ab9959909c7b8a": "f5f5eb6ed3409765416db97fa71e41ed",
".git/objects/7a/314ea63bfcda7f0348914a40de6ffd86b69831": "8ae1dacb4e8962970732e5f4f8d928a1",
".git/objects/22/1b297084e6c76ab5f33ae7ab76856163085bc4": "66f21a7ddaec9789db1823592e97df46",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a5bd6e66ca9a4cc82bdf1f8c2298e1e",
".git/logs/refs/heads/main": "894ffd414faf46e7b14e31d8cb373bc8",
".git/logs/refs/remotes/origin/main": "77f65acd79430f726964f56325f243e5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "277214e3c6a9de68c9ea14d6e2944c3a",
".git/refs/remotes/origin/main": "277214e3c6a9de68c9ea14d6e2944c3a",
".git/index": "2ed60502ffcea5d5d0776e096bab5e6a",
".git/COMMIT_EDITMSG": "8c0eccc7a876d6b46e1e48e163e474a8",
"assets/AssetManifest.json": "dded69ecd162d50c521fffdc1fa44487",
"assets/NOTICES": "b2a9e22bc4d3e5719359956590a294f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f371f65befb296113167d555f0197622",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ad5972b6a75ff0507d17a18936904e39",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/icons/svg/ic_launcher_square.svg": "057439c8b7e2dca94fcdfd2255e282f6",
"assets/assets/icons/png/ic_launcher_round.png": "f5d87ed40acec95d95ce568c0d9bde0a",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
