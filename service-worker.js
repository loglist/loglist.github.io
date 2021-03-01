/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/03/24/cSharpBase/index.html","fe4c911035b3d2da286e7f2d44452d0d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/03/25/aNewWayToSyncSourceCodeOfHexo/index.html","4c0463992af3939001b3a9b6bd7a9aea"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/09/30/numpy/index.html","b9a68556369dcecab81709e5c265a091"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/11/theErrorAboutInstallOlaindex/index.html","9647ea3775a26127869635fa255df54c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/14/shell-ffmpeg批量转flac至wav的方法/index.html","7018dcd03cc27b978e8f48e8154cd592"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/19/Hexo的jsdelivr-picgo图床与rss订阅/index.html","6701f57b10d5f7c0f1fd6505d1f1e14b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/20/css3极简笔记/index.html","3c1a6b83add8faabe91f0b40ef316e44"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/22/JS极简笔记/index.html","5aabb37cc70f13681d5124b23f61401c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/22/hello-world/index.html","31992ae0717ccb8e21b2d469d35f41f8"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/23/react极简笔记/index.html","569e3a91319a497f04c529951c504b93"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/26/Jsdeivr限制50M后怎么办/index.html","fe30e8ddfa0c46b1fc40360940c2473c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/26/如何查找google-analytics-key/index.html","45cc25b45f11c946d318a2d77b1f3733"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/29/whyAxiosCan’tGetCharlesMapLocalData/index.html","1b6def13f0e04df294f7235a1ae9e2f2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/11/05/react案例-简书/index.html","f9611c2ed19e214aebb4cf8b2eaf1a4c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/11/22/reactNative项目实例/index.html","1965e330ffd83a975c05beaeb53017e7"],["C:/Users/raydied/OneDrive - sprat/loglist/public/404.html","38b45389155f1ff1c532f3b308fab00e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/about/index.html","24b3615f2788bb8a6a9e9b7bb3391e58"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/03/index.html","cb5878259e619e1cdb9727ca457b23d5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/09/index.html","41f6a6302ea1171a25aa1ca151f6590e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/10/index.html","60b9da7920a0d073eec8e3f04803ca1b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/10/page/2/index.html","943b0244fda430e1fdff792745bcb53f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/11/index.html","0d5b3f487d5077b34676081172d74c76"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/index.html","d27ab46cc8a8c101d7ba8f5792219029"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/page/2/index.html","bde2ac0a24f0f8355a4c0e97cc8b01ec"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/index.html","0e4e1ddd39c615f06c83a5da4bcefd83"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/page/2/index.html","0e4e1ddd39c615f06c83a5da4bcefd83"],["C:/Users/raydied/OneDrive - sprat/loglist/public/blog/categories/index.html","7041347f2fa004207e0d4cbfa13934d3"],["C:/Users/raydied/OneDrive - sprat/loglist/public/blog/tags/index.html","18eaee023a7801562ac2a8cc5b271cc4"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Code/index.html","8e7e547883f56a0f289abb93238a98ac"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Site/index.html","ea188ee6ceb3f0d2f8003e09ff4abb19"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Skill/index.html","229f58cb466a9674d988bff7b302dda2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/index.html","7041347f2fa004207e0d4cbfa13934d3"],["C:/Users/raydied/OneDrive - sprat/loglist/public/css/style.css","027c952d44798790c773cd5e4f50aff6"],["C:/Users/raydied/OneDrive - sprat/loglist/public/friends/index.html","20127c1d0eef52ff8be526dfceb31cf2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/index.html","43f1d3c34d1083a3e92cd9a327693a46"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/app.js","4d34f2cbf4a768badb1a283211c3dcc1"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/page/2/index.html","29f848eba92711eb4ca69bc8ec0b9431"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/index.html","7fb680228585116f7ba2e50d5a58432a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/css/custom.css","b9ca921247c40de0abade72d34d5f2b8"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/about.html","937ec86a7146d51ed718496451a2ded7"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/help.html","cb13da0ee96cf983eec8b941591fe1ee"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/back.png","797f084fd6f5b6a9eed681e189fb901b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/doubleClick.png","cb3c3543f106462d5916ab38c4fb894d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/doubleTap.png","574e23d8c3e5c7826b8106d1ba116ff5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/leftClick.png","dc0203a67db3241fdc0b6e70a830029e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/logoBentleySmall.jpg","aaebdfc6bce716550a16faec96b78c47"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/middleClick.png","3c732f37ff9d3bcf2b65f9f0a8ac3b4f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/mouse.png","3250ae6fc13487e0e85e017de1851dca"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/oneFinger.png","e1913f2aa01f6a5bbaea23cfa6367db8"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/pan.png","328d693f51e8cf2695803eb319f60031"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/rightClick.png","e1341701f26c0d55ec4fa2abb3b05137"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/rotate.png","19135bdc5f24dea987633376e4e4696d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/touch.png","841c2c072da8ff99baf0ba1c0f2f6b95"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/img/zoom.png","2becf4bc843d4aa86b0ab7107ac60ea5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/index.html","bfa7e7a84659c26dee254d2e977a634a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/mouse_navigation.html","b917117cb8fc8f8866b60787cfa86470"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/help/touch_navigation.html","6e24fd45b49f50d93ab551ef9ee26e24"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/close.png","c3dafa80fe3dc4a8d68afb6c09a96301"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/closeMeasurement.png","fa5dfe06ca0dd0ead47248bd52c939c6"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/defaultRendering.png","44f3876998dca5ca12bb3d1e0c89a2f3"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/distance.png","2db7a8753a269c4d1c13281c894bc859"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/down_arrow.png","72e6e46119ab0e8c1ddcd0bfa1873d8f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/error.png","c720e9d2bcc4dc3ebe6975995f9a1620"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/fullScreen_In.png","1f97d2f0172307d29a653918a13df219"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/fullScreen_Out.png","177bc670fb5be33101fe306187dd7d82"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/go-home.png","44d4bed4adeb51140bfc386ffce50d18"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/help.png","8eb6f471405191b58c6a1a2cc92800d2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/info.png","95fe42032b11d225404756c4935aef79"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/info_console.png","94d2c8dd6a52bf2035c437507ec82104"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/link.png","1721ef782427adce0c2e1bae45cb3d7e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/load.png","93344183341249a685662d420657f6a5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/logoBentley.png","df3cda432af768925daeb79e95a12bdf"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/logoBentleySmall.jpg","aaebdfc6bce716550a16faec96b78c47"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/logoBentleySmall.png","04c41578b526023b9938c7384af24f49"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/measurements.png","9dab0813ba625a4b3763ca33ca3a762c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/menu.png","b535cf8871463d2e7627f9d4a993eb50"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/navigation.png","26fd87d27172d340a33f70549aae573d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/orbit.png","cace79445bafa937e86b10489b3ca20f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/pan.png","d0bedc6396611fc48541b08743bd261d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/play.png","2ab99a9c9529d5b9b480fb40f0c0bc0b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/playOver.png","55160c0bca2367bd7dacd22882dc6736"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/playPressed.png","1a1aabc6c095e262f0d1cdbdc7dadec7"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/position.png","f334e2a47597047c3691ecfd1e1f9ad9"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/rendering.png","f55972bb811def708846deba059b1ddb"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/test.png","f4267c6ff11a55a5b8b37e9244264b5b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/theme.png","e978d77e224722ffdc91104c1f4b6c85"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/up_arrow.png","9773687630ae83066dcbb1f2c48a6717"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/warning.png","9794d98a4cbecc46316049e67e36a7e3"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/icon/wireframe.png","c5f4d7d6d8900402b83b1dca12f49b98"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/libs/ac3d.js","2125206dd55b5aafe54d323d16f53069"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/libs/ctm/CTMWorker.js","d9cba4f97ab0536522d3fcd8398d15d8"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/libs/ctm/ctm.js","6cb8f792cae5681f39e4cd831479f7e8"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/libs/ctm/lzma.js","bb8e7414f707bfd6e7ae94437cf90d56"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/libs/proj4.js","3d33bdcedfedcfa80876603bd1388c90"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/libs/three.js","a8ef916dbb061e48636ada13eda9d8ab"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/placeholder.jpg","cb6e051b590f659c97a5c756b3a8f9d8"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/placeholder_bentley.jpg","cb6e051b590f659c97a5c756b3a8f9d8"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/sky/sky_0.jpg","07724d1281638ed9adf6d5e57d110878"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/sky/sky_1.jpg","4ca26a1690f5c99b38d70770a439770a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/sky/sky_2.jpg","a7459b68357912994cf778fba7729567"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/sky/sky_3.jpg","d4ca2f4ae8c983a48b3b3fe60b4e3521"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/sky/sky_4.jpg","db4b9e8e228e44936dc218a441bfe6fa"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/sky/sky_5.jpg","1436df9debe1d397201d5845a580cb38"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/textures/crosshair.png","c8533ada85ca5acd5bb03a89e1066101"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/textures/crosshair_invisible.png","05c981247dc19ddb90de8f03580b16e0"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/textures/line_invisible.png","0e2e7fbdaee286742ba3b4a24406e23c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/textures/line_visible.png","197cc281080942631d9367784454cc41"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/textures/position_invisible.png","3e4fe1145a3888d3dce693c42f42520c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/acute3d/textures/position_visible.png","032cd6e5a5b2e7fc3c5ec2473c33857c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/qx/mobile/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/qx/mobile/js/iscroll.js","d4773c1978ae9e16b84a1a9090f873a4"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/qx/mobile/js/iscroll.min.js","8c8182191634259034c117320ea7cc55"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/resource/qx/static/blank.html","8c0de000b1b784f4b60db4a94c6505af"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/App/script/acute3d.js","dc848cfd5ad195b72a17a5a4c101ca22"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/Scene/logo.png","206764f7531d6cd411525e0e2bd63601"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/3DViewer/Scene/placeholder.jpg","cb6e051b590f659c97a5c756b3a8f9d8"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css-animation.html","b97fe703dd9bc426f24c5b6110e2a2a9"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css-transition.html","18546f5053aece674790d523a23eb401"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css3-cube.html","98e9e28d7cc5df6c41fc5f4316bfa23a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/js-hoisting.html","a1dd9b06ad11601b07e81343c1dc5685"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/json.html","efffd25769a892b092f41c85ae0b845e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/jsvar.html","0853d1c6e690a471176b8b828f09d9cf"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-192x192.png","5722d3988df8c186ad0ad668a912ce94"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-36x36.png","359f6ab3b2a0f1b66fe9fa1a29da9c0e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-48x48.png","152e2c61a43f8dab3503cc625f66d655"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-114x114.png","7fc7bac6bec77b2e74d362e65157793e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-120x120.png","34dfe44ef4b559d653022e2f1ff05695"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-152x152.png","1f22f66afe224ea7c7b9f067144a2a92"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-180x180.png","0908377f0f4849cee38a74b406f832c6"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-57x57.png","b4c9f623bae24fe989a43d372584b133"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-60x60.png","3616e18cb1094b74aba96217db27f049"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-76x76.png","f6783ac354d83564bc5307802d8aa757"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-precomposed.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-16x16.png","4663a8bbb23de5af79bf332e6cbc4bcb"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-32x32.png","554c23f0febfabed533eaae7762c669d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/loglist.png","19217e3fe478363da60be39de72a5f5c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-150x150.png","280f77f5ed5646ba1b17d8d199a79959"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-310x310.png","30ccbe0ab86abbbdd6006212f6bfe085"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-70x70.png","89b0c7ecae47cf557e73973473fcdd55"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/C/index.html","724e915fb416ff3cd1a37535daceed18"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Charles/index.html","f42de59f642c2b3a31971cbb641f4212"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Hexo/index.html","be06de5a110140bd9d3789acb73c100b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Numpy/index.html","2f53735793f5a15152e705966dfb0d20"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Python/index.html","ac9a6a4683984d56373c808fd006a79d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Shell/index.html","feae525f14b8347a39f81a10aa7de678"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/css/index.html","64c42c99d30f2005d88eb6f8c20fad3f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/error/index.html","9600bf316ed2e1f267972ba91050a854"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/ffmpeg/index.html","c98272dd33da93330970e60055d5c3d0"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/index.html","18eaee023a7801562ac2a8cc5b271cc4"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/js/index.html","3633f465af7aff588e47742d44bd0a39"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/jsdelivr/index.html","1e7a785fbb177e8e2d094e040475e1e9"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/notes/index.html","8e63459da1d1b642fa6a39054d277578"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/project/index.html","248a91f28b833ade5b701b70125d3636"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/proxy/index.html","0b4eae2a0582bd5396ba501f471185a2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/react/index.html","95d33b42e019e2a0f0b1a90a3e833249"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/rss/index.html","c1d59f6274e89f4c2e36452584a38fbe"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tools/index.html","d9ad0e1a3623ddf24228d424e44f7c4f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







