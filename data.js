const allSkills = [
  // ==========================================
  // シュート技
  // ==========================================
  
  // --- テンション 30 (無属性/共通) ---
  { "name": "グラウンダーシュート", "type": "シュート", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "元気x2", "videoUrl":"" },
  { "name": "パワーシュート", "type": "シュート", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "感謝x2", "videoUrl":"" },
  { "name": "曲がるシュート", "type": "シュート", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "友情x2", "videoUrl":"" },
  { "name": "ループシュート", "type": "シュート", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "熱血x2", "videoUrl":"" },
  { "name": "ワンバンシュート", "type": "シュート", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "愛x2", "videoUrl":"" },
  
  // --- テンション 50 ---
  // 風属性
  { "name": "エイムショット", "type": "シュート", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "感謝x2 目標x3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/k/y/kyooxasrxxu.webm" },
  { "name": "ぐるぐるシュート", "type": "シュート", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "熱血x1 目標x3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/b/1/b1jcyv87o7k.webm" },
  { "name": "クロスドライブ", "type": "シュート", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "秘宝堂", "material": "友情x2 感謝x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/_/k/_kv7rtcmzrs.webm" },
  { "name": "コンドルダイブ", "type": "シュート", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "秘宝堂", "material": "感謝x1 目標x1", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/s/c/scaz7wdsee0.webm" },
  { "name": "スパイラルショット", "type": "シュート", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "熱血x1", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/a/k/akrrobodl3s.webm" },
  { "name": "スピニングシュート", "type": "シュート", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "目標x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/n/o/nobbjtm_xdc.webm" },
  { "name": "スピニングトランザム", "type": "シュート", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "友情x1 愛情x1", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/s/m/smz6gbdjph0.webm" },
  { "name": "ディバインアロー", "type": "シュート", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "熱血x1 夢x4", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/w/v/wvhtdh8x33m.webm" },  
  { "name": "マッハウィンド", "type": "シュート", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "練習はおにぎりx10 影の計画書x24", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/_/e/_eyep_8rvze.webm" },
  { "name": "L 彗星シュート", "type": "シュート", "subType": "ロング", "attr": "風", "tension": 50, "at": 50, "get": "VSストア", "material": "裂のコインx6 滅のコインx6", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/l/j/ljgdn0et0bc.webm" },
  { "name": "L ツナミブースト", "type": "シュート", "subType": "ロング", "attr": "風", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "心うつ格言x14 星空の下でx32", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/v/t/vtf78wqj8o8.webm" },
  { "name": "L フライングフィッシュ", "type": "シュート", "subType": "ロング", "attr": "風", "tension": 50, "at": 50, "get": "秘宝堂", "material": "感謝x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/o/d/od0mfvmftzu.webm" },
  { "name": "L プラズマボール", "type": "シュート", "subType": "ロング", "attr": "風", "tension": 50, "at": 50, "get": "秘宝堂", "material": "熱血x2 目標x3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/d/l/dllu4jqrxys.webm" },
  // 林属性
  { "name": "クンフーヘッド", "type": "シュート", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "目標x3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/j/v/jvt_05tc7oe.webm" },
  { "name": "サイコショット", "type": "シュート", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "VSストア", "material": "激のコインx6 滅のコインx3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/u/j/ujhvvpr-bc0.webm" },
  { "name": "ドラゴンクラッシュ", "type": "シュート", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "影の計画書x18 星空の下でx16", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/d/f/dfghx8zccuk.webm" },
  { "name": "パーフェクトコース", "type": "シュート", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂", "material": "愛x1 感謝x1", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/w/p/wpg2nvcs7_k.webm" },
  { "name": "百烈ショット", "type": "シュート", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "友情x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/m/c/mcu1pegua98.webm" },
  { "name": "ファントムシュート", "type": "シュート", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂", "material": "友情x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/p/v/pv55axw-lrm.webm" },
  { "name": "フォルテシモ", "type": "シュート", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "影の計画書x16 星空の下でx26", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/n/n/nnrxkqkwwmm.webm" },
  { "name": "フリーズショット", "type": "シュート", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂 | VSストア", "material": "友情x2 元気x2 | 激コインx6 滅コインx9", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/o/m/omkagsk20ie.webm" },
  { "name": "分身シュート", "type": "シュート", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "友情x1 感謝x4", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/0/o/0oujzwnhsie.webm" },
  { "name": "ローズスプラッシュ", "type": "シュート", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂", "material": "熱血x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/t/d/tdvu18u7s3e.webm" },
  { "name": "ローリングキック", "type": "シュート", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂", "material": "友情x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/u/h/uh38kl4pzo0.webm" },
  // 火属性
  { "name": "浴びせ蹴り", "type": "シュート", "subType": "", "attr": "火", "tension": 50, "at": 50, "get": "VSストア", "material": "裂のコインx3 滅のコインx6", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/3/w/3w8y5lyk_90.webm" },
  { "name": "ガンショット", "type": "シュート", "subType": "", "attr": "火", "tension": 50, "at": 50, "get": "秘宝堂", "material": "熱血x2 目標x6", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/v/x/vxinhm9poku.webm" },
  { "name": "グレネードショット", "type": "シュート", "subType": "", "attr": "火", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "感謝x1", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/s/t/st3acdvmvdm.webm" },
  { "name": "バウンドフレイム", "type": "シュート", "subType": "", "attr": "火", "tension": 50, "at": 50, "get": "秘宝堂", "material": "熱血x2 夢x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/u/u/uunqjmqa-5k.webm" },
  { "name": "メテオアタック", "type": "シュート", "subType": "", "attr": "火", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "練習はおにぎりx12 影の計画書x16", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/2/v/2vtv3pfnpoe.webm" },
  { "name": "ラン・ボール・ラン", "type": "シュート", "subType": "", "attr": "火", "tension": 50, "at": 50, "get": "秘宝堂", "material": "熱血x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/d/q/dqxswplop3c.webm" },
  { "name": "L ラピッドファイア", "type": "シュート", "subType": "ロング", "attr": "火", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "秋のマネージャー日記x12 星空の下でx16", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/-/u/-u1r3rh8c4k.webm" },

  // 山属性
  { "name": "ターザンキック", "type": "シュート", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "秘宝堂", "material": "目標x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/h/o/hovh9lvdvku.webm" },
  { "name": "つちだるま", "type": "シュート", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "秘宝堂", "material": "友情x1 元気x1", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/u/o/uoapteudyxm.webm" },
  { "name": "サイドワインダー", "type": "シュート", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "秘宝堂 | クロニクル百貨店", "material": "友情x1 元気x2 | 影の計画書x12 秋のマネージャー日記x16", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/_/r/_rftoqql-a8.webm" },
  { "name": "スネークショット", "type": "シュート", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "VSストア", "material": "激コインx3 裂コインx6", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/w/a/wawgksqfcu0.webm" },
  { "name": "ひとつ", "type": "シュート", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "おそらく円堂ハル固有", "material": "", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/y/8/y8v_bjitaom.webm" },
  { "name": "メガネクラッシュ", "type": "シュート", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "秋のマネージャー日記x20 星空の下でx20", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/m/y/myzvgs3im3u.webm" },
  { "name": "C クンフーアタック", "type": "シュート", "subType": "カウンター", "attr": "山", "tension": 50, "at": 50, "get": "VSストア", "material": "激コインx6 裂コインx3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/v/-/v-ybehvapbe.webm" },
  { "name": "C ぶっとびジャンプ", "type": "シュート", "subType": "カウンター", "attr": "山", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "じいちゃんのノートx12 円堂伝説の軌跡x16", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/l/u/lung-y_zyms.webm" },
  { "name": "L キョウボウヘッド", "type": "シュート", "subType": "ロング", "attr": "山", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "練習はおにぎりx16 秋のマネージャー日記x18", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/p/8/p8ewauhgvlm.webm" },
  { "name": "L レインボーループ", "type": "シュート", "subType": "ロング", "attr": "山", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "愛情x1 感謝x1", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/b/5/b5gjn9pbbxu.webm" },

  // --- テンション 60 ---
  // 風属性
  { "name": "マーメイドスマッシュ", "type": "シュート", "subType": "", "attr": "風", "tension": 60, "at": 50, "get": "クロニクル百貨店", "material": "影の計画書x10 星空の下でx14", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/v/t/vtnfjzyoar8.webm" },
  { "name": "エターナルブリザード", "type": "シュート", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおにぎりx26 影の計画書x26", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/-/u/-unvcs5rk7k.webm" },
  { "name": "ザ・タイフーン", "type": "シュート", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "じいちゃんのノートx10 心うつ格言x12", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/w/e/weoyxej70pu.webm" },
  { "name": "ザ・チューブ", "type": "シュート", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "VSストア", "material": "裂コインx12 滅コインx9", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/k/z/kz5sqzbtf58.webm" },
  { "name": "ソニックショット", "type": "シュート", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂アーケード支部", "material": "友情x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/d/l/dlhevunbomm.webm" },
  { "name": "天空サンダー", "type": "シュート", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "熱血x3 友情x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/b/3/b3hxzj2quos.webm" },
  { "name": "メガロドン", "type": "シュート", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x3 夢x3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/3/_/3_sk6ianysk.webm" },
  { "name": "レボリューションV", "type": "シュート", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x6 夢x1", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/g/y/gyntuauesoc.webm" },
  { "name": "C バックトルネード", "type": "シュート", "subType": "カウンター", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "目標x2 夢x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/2/a/2akmqaj5cx8.webm" },
  { "name": "C ホワイトハリケーン", "type": "シュート", "subType": "カウンター", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x4 友情x4", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/u/s/usx5wi5xmtk.webm" },
  { "name": "L エクスカリバー", "type": "シュート", "subType": "ロング", "attr": "風", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "心うつ格言x20 秋のマネージャー日記x40", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/t/c/tcmllsgj-du.webm" },
  { "name": "L グングニル", "type": "シュート", "subType": "ロング", "attr": "風", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x20 秋のマネージャー日記x20", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/v/8/v8oibl8xxxe.webm" },
  { "name": "L シルバーウルフレジェンド", "type": "シュート", "subType": "ロング", "attr": "風", "tension": 60, "at": 60, "get": "VSストア", "material": "裂のコインx15 滅のコインx15", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/5/5/55j-onr0eoc.webm" },
  { "name": "L フライングマーリン", "type": "シュート", "subType": "ロング", "attr": "風", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx15 滅のコインx15", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/o/-/o-xqwfcggde.webm" },
  // 林属性
  { "name": "アイボリークラッシュ", "type": "シュート", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "VSストア", "material": "激コインx15 滅コインx9", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/v/-/v-glxintpye.webm" },
  { "name": "アストロブレイク", "type": "シュート", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "影の計画書x28 星空の下でx28", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/1/r/1r7ux8gi670.webm" },
  { "name": "アンサーブースト", "type": "シュート", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "VSストア", "material": "激コインx15 裂コインx15", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/z/w/zwald6k8rus.webm" },
  { "name": "スプリングアロー", "type": "シュート", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x2 感謝x6", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/n/h/nhomb7cm8hk.webm" },
  { "name": "セキュリティショット", "type": "シュート", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x2 夢x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/4/2/42z_nfqyvj0.webm" },
  { "name": "デュアルストライク", "type": "シュート", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x2 元気x6", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/y/y/yyyllxx81x0.webm" },
  { "name": "トカチェフボンバー", "type": "シュート", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "目標x2 夢x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/k/w/kwp6pez6ios.webm" },
  { "name": "バウンサーラビット", "type": "シュート", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "心うつ格言x20 練習はおにぎりx30", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/j/k/jkobr-lzisc.webm" },
  { "name": "マボロシショット", "type": "シュート", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂", "material": "愛情x4 感謝x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/i/l/ilfuwybocam.webm" },
  { "name": "ミラージュシュート", "type": "シュート", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "愛情x4 感謝x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/q/z/qzg0buyxigu.webm" },
  { "name": "ワイバーンクラッシュ", "type": "シュート", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "心うつ格言x12 星空の下でx28", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/y/z/yzqkecf6gde.webm" },
  { "name": "C ガニメデプロトン", "type": "シュート", "subType": "カウンター", "attr": "林", "tension": 60, "at": 60, "get": "VSストア", "material": "裂コインx12 滅コインx12", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/v/r/vrvoj0d0kc8.webm" },
  { "name": "C ダークトルネード", "type": "シュート", "subType": "カウンター", "attr": "林", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "愛情x2 目標x3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/8/1/81kzslr9h9k.webm" },
  { "name": "C ダークマター", "type": "シュート", "subType": "カウンター", "attr": "林", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "熱血x3 元気x4", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/k/2/k2ofnmnnuge.webm" },
  { "name": "L デススピアー", "type": "シュート", "subType": "ロング", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "心うつ格言x14 星空の下でx22", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/m/n/mnejmzih9ss.webm" },
  // 火属性
  { "name": "シャインドライブ", "type": "シュート", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x1 目標x3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/n/h/nh2yu4alaek.webm" },
  { "name": "サンシャインブレード", "type": "シュート", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "友情x3 感謝x4", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/d/u/duke22uxt9k.webm" },
  { "name": "ダイナマイトシュート", "type": "シュート", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x12 影の計画書ページx20", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/f/m/fmlo0prbb7s.webm" },
  { "name": "ダブルグレネード", "type": "シュート", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/x/f/xffhq4hskde.webm" },
  { "name": "ダブル・ジョー", "type": "シュート", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "友情x5 元気x3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/c/6/c6ojbegoyv8.webm" },
  { "name": "通天閣シュート", "type": "シュート", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx12 裂のコインx12", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/a/6/a6zdbxh9jwm.webm" },
  { "name": "デスソード", "type": "シュート", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "影の計画書ページx28 星空の下でx26", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/o/s/osd_iaar4qs.webm" },
  { "name": "ファイアトルネード", "type": "シュート", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "影の計画書ページx18 星空の下でx16", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/o/j/ojtphhycf78.webm" },
  { "name": "ヘルファイア", "type": "シュート", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂 お台場支部 | VSストア", "material": "熱血x1 元気x6 | 裂のコインx9 滅のコインx12", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/n/2/n2zt6hfbz88.webm" },
  { "name": "マキシマムファイア", "type": "シュート", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x5 夢x4", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/f/p/fp1-3udymq8.webm" },
  { "name": "ロケットヘッド", "type": "シュート", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x3 元気x4", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/1/x/1xclzuev2zc.webm" },
  { "name": "C ド根性バット", "type": "シュート", "subType": "カウンター", "attr": "火", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおにぎりx14 秋のマネージャー日記ページx26", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/m/t/mtjgol2axke.webm" },
  { "name": "L RCシュート", "type": "シュート", "subType": "ロング", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x1 愛x5", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/m/x/mxjdjvflrme.webm" },
  { "name": "L デスレイン", "type": "シュート", "subType": "ロング", "attr": "火", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx9 裂のコインx12", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/w/z/wzsyvc7n8_c.webm" },
  { "name": "L パトリオットシュート", "type": "シュート", "subType": "ロング", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x2 目標x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/x/m/xmawfko5mee.webm" },
  { "name": "L 火縄バレット", "type": "シュート", "subType": "ロング", "attr": "火", "tension": 60, "at": 60, "get": "VSストア", "material": "裂のコインx9 減のコインx9", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/d/f/df-fe_rxktk.webm" },
  { "name": "L 炎の風見鶏", "type": "シュート", "subType": "ロング", "attr": "火", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "心うつ格言x12 練習はおにぎりx22", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/l/m/lmxuahinfck.webm" },
  { "name": "L ラブ・アロー", "type": "シュート", "subType": "ロング", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x2 夢x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/9/q/9qdqxie5rnu.webm" },
  // 山属性
  { "name": "オーガドライブ", "type": "シュート", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x5 目標x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/w/a/waierryo6t0.webm" },
  { "name": "神隠し", "type": "シュート", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx9 減のコインx6", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/f/l/fl2o4w3esxc.webm" },
  { "name": "ギアドライブ", "type": "シュート", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "友情x2 目標x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/j/a/jaiymvdb2y8.webm" },
  { "name": "クルクルヘッド", "type": "シュート", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおにぎりx24 秋のマネージャー日記ページx18", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/m/3/m3umhhhwnus.webm" },
  { "name": "剛の一閃", "type": "シュート", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "熱血x3 友情x2", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/w/d/wdsj1qabfim.webm" },
  { "name": "伝来宝刀", "type": "シュート", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "秘宝堂 お台場支部 | クロニクル百貨店", "material": "熱血x4 元気x4 | 練習はおにぎりx14 星空の下でx12", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/l/g/lgwlkz26tkm.webm" },
  { "name": "パラディンストライク", "type": "シュート", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x1 目標x5", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/l/g/lgwlkz26tkm.webm" },
  { "name": "リフレクトバスター", "type": "シュート", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "熱血x3 夢x3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/1/e/1er4u7ihdqk.webm" },
  { "name": "C バタフライドリーム", "type": "シュート", "subType": "カウンター", "attr": "山", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおにぎりx34 円堂伝説の軌跡x12", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/1/-/1-mdwp28rim.webm" },
  { "name": "L イーグルバスター", "type": "シュート", "subType": "ロング", "attr": "山", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x2 愛x3", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/e/w/ew98dwqg8rk.webm" },
  { "name": "L ストライクサンバ", "type": "シュート", "subType": "ロング", "attr": "山", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x4 夢x4", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/5/4/54ucz-mmmg0.webm" },
  { "name": "L タイガードライブ", "type": "シュート", "subType": "ロング", "attr": "山", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx12 減のコインx9", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/i/0/i0xqmtgztw8.webm" },
  { "name": "L バリスタショット", "type": "シュート", "subType": "ロング", "attr": "山", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx9 減のコインx12", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/h/i/hiyiz3rejs8.webm" },
  // 無属性
  { "name": "L ダブルショット", "type": "シュート", "subType": "ロング", "attr": "無", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "心うつ格言x16 星空の下でx38", "videoUrl":"https://dxi4wb638ujep.cloudfront.net/1/k/3/h/3h02jutzwne.webm" },

  // --- テンション 70 ---
  // 風属性
  { "name": "ゴッドウィンド", "type": "シュート", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx12 裂のコインx12", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/f/m/fmdwbqz2n4s.webm" },
  { "name": "ゴッドノウズ", "type": "シュート", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x20 星空の下でx24", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/f/j/fjsbt89vqiu.webm" },
  { "name": "サンダービースト", "type": "シュート", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "VSストア", "material": "裂のコインx9 減のコインx12", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/p/z/pzsysq3cuzc.webm" },
  { "name": "ドラゴンブラスター", "type": "シュート", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x14 秋のマネージャー日記ページx40", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/g/j/gjfxkr1jd-s.webm" },
  { "name": "ノーザンインパクト", "type": "シュート", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "秘宝堂 アーケード支部、秘宝堂 お台場支部", "material": "感謝x7 目標x1", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/x/s/xsci2ohholk.webm" },
  { "name": "パルクールアタック", "type": "シュート", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "練習はおにぎりx28 円堂伝説の軌跡x10", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/e/7/e7wkkmu03yu.webm" },
  { "name": "パンサーブリザード", "type": "シュート", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "友情x4 愛x2", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/0/u/0uzs9ez8gas.webm" },
  { "name": "ワイバーンブリザード", "type": "シュート", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x18 秋のマネージャー日記ページx20", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/a/4/a4xwwbnwlfe.webm" },
  { "name": "C イナズマ1号", "type": "シュート", "subType": "カウンター", "attr": "風", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x20 星空の下でx28", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/9/q/9qluihgu3ou.webm" },
  { "name": "C イナズマ落とし", "type": "シュート", "subType": "カウンター", "attr": "風", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "影の計画書ページx20 秋のマネージャー日記ページx12", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/f/k/fkb9flhwhok.webm" },
  { "name": "C デッドストレート", "type": "シュート", "subType": "カウンター", "attr": "風", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx12 滅のコインx9", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/v/8/v8q2umk6xye.webm" },
  { "name": "L ウルフレジェンド", "type": "シュート", "subType": "ロング", "attr": "風", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x10 秋のマネージャー日記ページx30", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/8/a/8a9ale9jkkc.webm" },
  { "name": "L スパークルウェイブ", "type": "シュート", "subType": "ロング", "attr": "風", "tension": 70, "at": 70, "get": "VSストア", "material": "滅のコインx18 ヴィクトリーストーンx60", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/o/j/ojrxueqv548.webm" },
  // 林属性
  { "name": "エクステンドゾーン", "type": "シュート", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "秘宝堂 アーケード支部、秘宝堂 お台場支部", "material": "感謝x5 夢x3", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/r/u/ruzak6cpsfk.webm" },
  { "name": "ジョーカーレインズ", "type": "シュート", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "熱血x1 友情x7", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/m/i/mizqrmezw1u.webm" },
  { "name": "デスゾーン", "type": "シュート", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x12 秋のマネージャー日記ページx22", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/y/h/yhiytoweiik.webm" },
  { "name": "ドラゴンスレイヤー", "type": "シュート", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "影の計画書ページx16 秋のマネージャー日記ページx10", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/e/0/e0-msikw2ke.webm" },
  { "name": "バハムートクラッシュ", "type": "シュート", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "熱血x4 愛x2", "videoUrl": "" },
  { "name": "ブラックアッシュ", "type": "シュート", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x20 影の計画書ページx34", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/l/p/lph4dmgo4t0.webm" },
  { "name": "ペガサスショット", "type": "シュート", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "VSストア", "material": "裂のコインx12 減のコインx9", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/e/b/ebj_1dyedt8.webm" },
  { "name": "ユニバースブラスト", "type": "シュート", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "VSストア", "material": "裂のコインx9 減のコインx12", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/3/f/3flbewkqukm.webm" },
  { "name": "C 二百烈ショット", "type": "シュート", "subType": "カウンター", "attr": "林", "tension": 70, "at": 70, "get": "VSストア", "material": "裂のコインx9 減のコインx12", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/e/u/euzp2aat6cs.webm" },
  { "name": "L ガンマストライク", "type": "シュート", "subType": "ロング", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x10 秋のマネージャー日記ページx18", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/u/j/uj_rgmjtnb0.webm" },
  { "name": "カブキブレイク", "type": "シュート", "subType": "", "attr": "林", "tension": 70, "at": 80, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x12 秋のマネージャー日記ページx22", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/c/1/c1mltaqszhs.webm" },
  // 火属性
  { "name": "Xブラスト", "type": "シュート", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx12 心うつ格言x40", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/x/_/x_4ioq5xgvs.webm" },
  { "name": "オイルラッシュ", "type": "シュート", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "VSストア", "material": "裂のコインx12 減のコインx9", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/7/w/7w7orjeki0k.webm" },
  { "name": "チートブラスター", "type": "シュート", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "感謝x2 元気x3", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/h/a/haa3lyjzdbu.webm" },
  { "name": "ツインブースト", "type": "シュート", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "練習はおにぎりx12 星空の下でx10", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/_/l/_liim4u4yiu.webm" },
  { "name": "デスドロップ", "type": "シュート", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x16 影の計画書ページx38", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/t/n/tnup7nn0xzk.webm" },
  { "name": "デビルバースト", "type": "シュート", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "VSストア", "material": "裂のコインx9 減のコインx12", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/f/e/femy73ftlgm.webm" },
  { "name": "トライアングルZ", "type": "シュート", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x10 星空の下でx20", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/9/f/9fsnf0qgcxs.webm" },
  { "name": "ドラゴントルネード", "type": "シュート", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x12 星空の下でx28", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/0/h/0hj6-dbvhr8.webm" },
  { "name": "爆熱ストーム", "type": "シュート", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x12 秋のマネージャー日記ページx26", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/p/8/p88ovtfrjim.webm" },
  { "name": "C アトミックフレア", "type": "シュート", "subType": "カウンター", "attr": "火", "tension": 70, "at": 70, "get": "秘宝堂 アーケード支部、秘宝堂 お台場支部", "material": "熱血x4 元気x5", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/s/y/symnrf0ari8.webm" },
  { "name": "C ドラゴンキャノン", "type": "シュート", "subType": "カウンター", "attr": "火", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx12 裂のコインx12", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/d/a/dadqioxgycc.webm" },
  { "name": "C 流星ブレード", "type": "シュート", "subType": "カウンター", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x20 影の計画書ページx32", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/e/5/e5kp6dgyxic.webm" },
  { "name": "L やきもちスクリュー", "type": "シュート", "subType": "ロング", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "秋のマネージャー日記ページx28 星空の下でx30", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/m/t/mtb4diu3xne.webm" },
  // 山属性
  { "name": "ダイナソーブレイク", "type": "シュート", "subType": "", "attr": "山", "tension": 70, "at": 60, "get": "VSストア", "material": "裂のコインx6 減のコインx9", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/s/n/snql4rr7jvk.webm" },
  { "name": "エクストリームラビット", "type": "シュート", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "練習はおにぎりx10 星空の下でx14", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/g/l/glwaofjmyuc.webm" },
  { "name": "ギガドンヘッド", "type": "シュート", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x12 秋のマネージャー日記ページx22", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/m/c/mcsl6d4d8-8.webm" },
  { "name": "ゴールドフィーバー", "type": "シュート", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx9 裂のコインx12", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/k/w/kwrecdrxers.webm" },
  { "name": "オーディンソード", "type": "シュート", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "練習はおにぎりx30 円堂伝説の軌跡x14", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/8/6/86alvmdugs0.webm" },
  { "name": "ゴッドキャノン", "type": "シュート", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "VSストア", "material": "裂のコインx12 減のコインx12", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/v/e/ve_-gzrddts.webm" },
  { "name": "ディザスターブレイク", "type": "シュート", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "スピリット交換所", "material": "ザナークx3 ゴッドハンド草x2", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/4/o/4ottlq7hbbu.webm" },
  { "name": "ドラゴングランド", "type": "シュート", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx10 練習はおにぎりx38", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/-/7/-76clhvlpic.webm" },
  { "name": "C 双飛遊星弾", "type": "シュート", "subType": "カウンター", "attr": "山", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "熱血x1 目標x5", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/2/v/2vrrcmhgpne.webm" },
  { "name": "C メガトンヘッド", "type": "シュート", "subType": "カウンター", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "影の計画書ページx14 星空の下でx22", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/g/v/gvq2iky1w28.webm" },
  { "name": "L グラディウスアーチ", "type": "シュート", "subType": "ロング", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx16 円堂伝説の軌跡x10", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/c/v/cv5q8r2czme.webm" },
  { "name": "L ド根性クラブ", "type": "シュート", "subType": "ロング", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x10 星空の下でx24", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/c/1/c1e1ydib_es.webm" },
  { "name": "L ヘブンドライブ", "type": "シュート", "subType": "ロング", "attr": "山", "tension": 70, "at": 70, "get": "秘宝堂 アーケード支部、秘宝堂 お台場支部", "material": "友情x5 目標x4", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/i/q/iql9eba2htc.webm" },
  // 無属性
  { "name": "L バイシクルソード", "type": "シュート", "subType": "ロング", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x14 星空の下でx20", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/k/-/k-kjgcielhm.webm" },
  
  // --- テンション 80 ---
  // 風属性
  { "name": "イナズマ1号落とし", "type": "シュート", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "VSストア", "material": "激のコインx15 ヴィクトリーストーンx60", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/7/5/750l51k9fuc.webm" },
  { "name": "ゴッドブレイク", "type": "シュート", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "ヴィクトリーボックス", "material": "", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/r/9/r9hxl1up7fu.webm" },
  { "name": "ザ・バース", "type": "シュート", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "スピリット交換所", "material": "ヒロト(無印3)Lv50↑ ヒロト(無印3)x2 吹雪(無印2,3)x2", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/x/q/xqprp_vftmu.webm" },
  { "name": "ザ・ハリケーン", "type": "シュート", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "心うつ格言x16 星空の下でx30", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/g/x/gxdfxd831fm.webm" },
  { "name": "竜巻落とし", "type": "シュート", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "特訓ショップ", "material": "熱血x1 目標x5", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/-/b/-bd5bvr4dq0.webm" },
  { "name": "天地雷鳴", "type": "シュート", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "", "material": "", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/f/l/flownzvpkyc.webm" },
  { "name": "トライペガサス", "type": "シュート", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "心うつ格言x10 影の計画書ページx24", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/k/r/krfeukshod0.webm" },
  { "name": "バブルボイル", "type": "シュート", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "VSストア", "material": "裂のコインx18 ヴィクトリーストーンx60", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/1/r/1rdqi_4lc40.webm" },
  { "name": "ファイアブリザード", "type": "シュート", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "特訓ショップ", "material": "熱血x4 目標x3", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/r/q/rqm3dkrsi2s.webm" },
  { "name": "L 皇帝ペンギン7", "type": "シュート", "subType": "ロング", "attr": "風", "tension": 80, "at": 85, "get": "VSストア", "material": "裂のコインx15", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/6/g/6g8ntnzjfve.webm" },
  // 林属性
  { "name": "グランフェンリル", "type": "シュート", "subType": "", "attr": "林", "tension": 80, "at": 85, "get": "スピリット交換所", "material": "マークx1 ディランx1", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/n/s/nsreczlurfc.webm" },
  { "name": "皇帝ペンギン1号", "type": "シュート", "subType": "", "attr": "林", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x10 影の計画書ページx40", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/n/y/nymhmhbznx0.webm" },
  { "name": "皇帝ペンギン2号", "type": "シュート", "subType": "", "attr": "林", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "心うつ格言x12 星空の下でx34", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/c/a/capg_we1udu.webm" },
  { "name": "刹那ブースト", "type": "シュート", "subType": "", "attr": "林", "tension": 80, "at": 85, "get": "", "material": "", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/s/t/stp-panljem.webm" },
  { "name": "デスゾーン2", "type": "シュート", "subType": "", "attr": "林", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "心うつ格言x22 星空の下でx40", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/e/7/e7uarpmzrbu.webm" },
  { "name": "ペンギン・ザ・パレード", "type": "シュート", "subType": "", "attr": "林", "tension": 80, "at": 85, "get": "特訓ショップ", "material": "熱血x3 友情x3", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/7/y/7ykig-dybic.webm" },
  { "name": "C ダブルトルネード", "type": "シュート", "subType": "カウンター", "attr": "林", "tension": 80, "at": 85, "get": "VSストア", "material": "裂のコインx18 ヴィクトリーストーンx60", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/j/a/jaxs8gs6g7u.webm" },
  { "name": "C ディメンションストーム", "type": "シュート", "subType": "カウンター", "attr": "林", "tension": 80, "at": 85, "get": "VSストア", "material": "滅のコインx27 ヴィクトリーストーンx75", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/f/k/fk5dqm5dhrk.webm" },
  // 火属性
  { "name": "皇帝ペンギンX", "type": "シュート", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "ヴィクトリーボックス", "material": "", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/g/4/g4q2wiqdeg0.webm" },
  { "name": "ザ・フェニックス", "type": "シュート", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "ヴィクトリーボックス", "material": "", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/t/y/tyynsp4p5u8.webm" },
  { "name": "サンシャインストーム", "type": "シュート", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx18 心うつ格言x32", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/h/h/hhakvzhai-s.webm" },
  { "name": "タイガーストーム", "type": "シュート", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "練習はおにぎりx34 円堂伝説の軌跡x10", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/v/c/vcpt_3ckb5s.webm" },
  { "name": "ツインブーストF", "type": "シュート", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "練習はおにぎりx16 円堂伝説の軌跡x10", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/x/w/xwo0ntryhe8.webm" },
  { "name": "デッドフューチャー", "type": "シュート", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "心うつ格言x10 星空の下でx32", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/w/v/wv_t2ekcr0m.webm" },
  { "name": "天空落とし", "type": "シュート", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "ヴィクトリーボックス", "material": "", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/s/i/sinwfe9pimc.webm" },
  { "name": "トライアングルZZ", "type": "シュート", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "心うつ格言x12 秋のマネージャー日記ページx38", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/2/g/2gdd0i3kofu.webm" },
  { "name": "爆熱スクリュー", "type": "シュート", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x10 影の計画書ページx38", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/h/b/hb3v2r-lp18.webm" },
  { "name": "ファイアトルネードDD", "type": "シュート", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "スピリット交換所", "material": "天馬x1 剣城x1", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/2/p/2p0wtdhqlgs.webm" },
  { "name": "メテオオッド・ファイアトルネード", "type": "シュート", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "特訓ショップ", "material": "愛x3 目標x3", "videoUrl": "" },
  { "name": "C 菊一文字", "type": "シュート", "subType": "カウンター", "attr": "火", "tension": 80, "at": 85, "get": "", "material": "", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/_/k/_ktfeuah_ss.webm" },
  { "name": "L アサルトシュート", "type": "シュート", "subType": "ロング", "attr": "林", "tension": 80, "at": 85, "get": "VSストア", "material": "激のコインx9 滅のコインx12", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/_/v/_v6a_0dgap0.webm" },
  { "name": "L カザンガン", "type": "シュート", "subType": "ロング", "attr": "火", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx14 星空の下でx30", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/3/w/3wemmmqjz-0.webm" },
  { "name": "L トリプルブースト", "type": "シュート", "subType": "ロング", "attr": "火", "tension": 80, "at": 85, "get": "特訓ショップ", "material": "友情x3 愛x4", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/6/x/6x0jjg4eql0.webm" },
  // 山属性
  { "name": "ガイアブレイク", "type": "シュート", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "VSストア", "material": "裂のコインx18 ヴィクトリーストーンx60", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/g/3/g36gzpcq5xk.webm" },
  { "name": "グレートマックスなオレ", "type": "シュート", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "", "material": "", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/l/m/lmjq1iqk5bk.webm" },
  { "name": "シャドウ・レイ", "type": "シュート", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "秘宝堂 アーケード支部、秘宝堂 お台場支部", "material": "感謝x9 目標x9", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/e/z/eztqer4vba0.webm" },
  { "name": "スリングショット", "type": "シュート", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "秘宝堂 アーケード支部、秘宝堂 お台場支部", "material": "熱血x2 友情x6", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/z/4/z4aah2fwsz8.webm" },
  { "name": "ダストジャベリン", "type": "シュート", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "VSストア", "material": "激のコインx15 ヴィクトリーストーンx60", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/e/5/e5yxpaefxlc.webm" },
  { "name": "フローラルデスペアー", "type": "シュート", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx14 影の計画書ページx20", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/0/o/0os3svvmkle.webm" },
  { "name": "ユニコーンブースト", "type": "シュート", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "VSストア", "material": "裂のコインx18 ヴィクトリーストーンx60", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/v/z/vz4eyiu-wgu.webm" },
  // 無属性
  { "name": "風林火山デストロイヤー", "type": "シュート", "subType": "", "attr": "無", "tension": 80, "at": 85, "get": "ヴィクトリーボックス", "material": "", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/u/b/ubqzuzg0vgc.webm" },
  { "name": "C ゼロマグナム", "type": "シュート", "subType": "カウンター", "attr": "無", "tension": 80, "at": 85, "get": "ヴィクトリーボックス", "material": "", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/a/g/agohnf61bsm.webm" },
  { "name": "L シェルビットバースト", "type": "シュート", "subType": "ロング", "attr": "無", "tension": 80, "at": 85, "get": "スピリット交換所", "material": "サリューx3 イナズマの花x2💿", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/o/m/omckzr8bshe.webm" },
  // --- テンション 90 ---
  // 風属性
  { "name": "グロリアスレイ", "type": "シュート", "subType": "", "attr": "風", "tension": 90, "at": 85, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx10 秋のマネージャー日記ページx32", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/d/q/dqjsjq9fp0c.webm" },
  // 無属性
  { "name": "サウザンドアロー", "type": "シュート", "subType": "", "attr": "無", "tension": 90, "at": 85, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx12 影の計画書ページx36", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/9/k/9kcxgz4j7g8.webm" },
  // --- テンション 100 ---
  // 風属性
  { "name": "イナズマブレイク", "type": "シュート", "subType": "", "attr": "風", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x18 影の計画書ページx26", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/r/m/rmo2xslf49m.webm" },
  { "name": "オービタルドライブ", "type": "シュート", "subType": "", "attr": "風", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx22 円堂伝説の軌跡x30", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/n/y/ny0ftidebu0.webm" },
  { "name": "最強イレブン波動", "type": "シュート", "subType": "", "attr": "風", "tension": 100, "at": 100, "get": "ヴィクトリーボックス", "material": "", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/u/o/uo4xyd2wuym.webm" },
  { "name": "ザ・モンスターズ", "type": "シュート", "subType": "", "attr": "風", "tension": 100, "at": 100, "get": "VSストア", "material": "激のコインx27 ヴィクトリーストーンx75", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/2/a/2acylzruku8.webm" },
  { "name": "春雷", "type": "シュート", "subType": "", "attr": "風", "tension": 100, "at": 100, "get": "特訓ショップ", "material": "熱血x10 感謝x10", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/j/7/j7hrlrbfydu.webm" },
  { "name": "スターゲイザー", "type": "シュート", "subType": "", "attr": "風", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx20 心うつ格言x28", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/s/d/sdpadj6zmse.webm" },
  { "name": "スペースペンギン", "type": "シュート", "subType": "", "attr": "風", "tension": 100, "at": 100, "get": "VSストア", "material": "減のコインx27 ヴィクトリーストーンx75", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/p/x/pxhrz95anws.webm" },
  { "name": "プライムレジェンド", "type": "シュート", "subType": "", "attr": "風", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "鬼道(無印)Lv60↑ イナズマの花x10 ゴッドハンド草x10", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/b/b/bbjtcjd3rm0.webm" },
  { "name": "ブラックドーン", "type": "シュート", "subType": "", "attr": "風", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "瞬木(ダーク)Lv70↑ 瞬木x2 剣城x2", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/e/u/euhxdzcacbs.webm" },
  { "name": "C 嵐・竜巻・ハリケーン", "type": "シュート", "subType": "カウンター", "attr": "風", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "天馬x1", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/q/-/q-epyubi7-e.webm" },
  // 林属性
  { "name": "カオスブレイク", "type": "シュート", "subType": "", "attr": "林", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "アフロディ(無印)x1 涼野風介x1 南雲晴矢x1", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/n/9/n9c3lmzaagk.webm" },
  { "name": "皇帝ペンギン3号", "type": "シュート", "subType": "", "attr": "林", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "鬼道(無印)x1 不動(無印3)x1 佐久間(無印1)", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/t/9/t9ixruqme_s.webm" },
  { "name": "スーパーノヴァ", "type": "シュート", "subType": "", "attr": "林", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "グランLv50↑ ウルビダx2 沖田x2", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/j/e/jeceggmi4qc.webm" },
  { "name": "スクリーム・オブ・エデン", "type": "シュート", "subType": "", "attr": "林", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "リュゲルx1 ガンダレスx1", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/-/7/-7ciqe3iphc.webm" },
  { "name": "ダークフェニックス", "type": "シュート", "subType": "", "attr": "林", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x24 星空の下でx34", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/l/_/l_fco5ek9wc.webm" },
  { "name": "ビッグバンスラッシュス", "type": "シュート", "subType": "", "attr": "林", "tension": 100, "at": 100, "get": "VSストア", "material": "激コインx27 ヴィクトリーストーンx75", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/s/c/sc4novb_ih0.webm" },
  { "name": "マジックアンプ", "type": "シュート", "subType": "", "attr": "林", "tension": 100, "at": 100, "get": "VSストア", "material": "激コインx27 ヴィクトリーストーンx75", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/j/1/j1yhu2cjlhs.webm" },
  { "name": "ラスト・デスゾーン", "type": "シュート", "subType": "", "attr": "林", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "染岡(レジェンドJ)Lv70↑ ヒロト(レジェンドJ)x2 吹雪(レジェンドJ)x2", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/_/l/_la257mvulu.webm" },
  // 火属性
  { "name": "カザンライ", "type": "シュート", "subType": "", "attr": "火", "tension": 100, "at": 100, "get": "VSストア", "material": "滅のコインx30 ヴィクトリーストーンx75", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/x/f/xfn5f7fbsee.webm" },
  { "name": "クロスファイア", "type": "シュート", "subType": "", "attr": "火", "tension": 100, "at": 100, "get": "特訓ショップ", "material": "熱血x5 元気x7", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/c/b/cb0f1ovrmqm.webm" },
  { "name": "ザ・ギャラクシー", "type": "シュート", "subType": "", "attr": "火", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx18 練習はおにぎりx30", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/g/k/gk_xctt_vok.webm" },
  { "name": "ネオ・ギャラクシー", "type": "シュート", "subType": "", "attr": "火", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx18 円堂伝説の軌跡x24", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/o/9/o9l7sl783ac.webm" },
  { "name": "ビーストロード", "type": "シュート", "subType": "", "attr": "火", "tension": 100, "at": 100, "get": "VSストア", "material": "滅のコインx27 ヴィクトリーストーンx75", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/p/a/pa20sn-nol0.webm" },
  { "name": "ビックバン", "type": "シュート", "subType": "", "attr": "火", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "ヒロト(無印3)Lv50↑ ウィーズx2 ギリスx2", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/m/4/m4-weaj_a_8.webm" },
  { "name": "ファイアトルネードTC", "type": "シュート", "subType": "", "attr": "火", "tension": 100, "at": 100, "get": "VSストア", "material": "裂のコインx30 ヴィクトリーストーンx75", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/u/h/uhpc_ige_r0.webm" },
  { "name": "ロイヤルハートショット", "type": "シュート", "subType": "", "attr": "火", "tension": 100, "at": 100, "get": "VSストア", "material": "裂のコインx27 ヴィクトリーストーンx75", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/t/d/tdxqa_2w00e.webm" },
  { "name": "L グランドファイア", "type": "シュート", "subType": "ロング", "attr": "火", "tension": 100, "at": 100, "get": "ヴィクトリーボックス", "material": "", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/-/0/-0qkmahmozm.webm" },
  // 山属性
  { "name": "ヴァンパイアロード", "type": "シュート", "subType": "", "attr": "山", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx16 円堂伝説の軌跡x28", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/h/o/hot5im3ujnu.webm" },
  { "name": "エボリューション", "type": "シュート", "subType": "", "attr": "山", "tension": 100, "at": 100, "get": "秘宝堂 アーケード支部、秘宝堂 お台場支部", "material": "熱血x5 友情x4", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/f/g/fgcnq7vgnze.webm" },
  { "name": "ジ・アース", "type": "シュート", "subType": "", "attr": "山", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "円堂(無印)Lv50↑ 豪炎寺(無印)x2 吹雪(無印2,3)x2", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/q/r/qrrcgcp72k8.webm" },
  { "name": "ジ・アース∞", "type": "シュート", "subType": "", "attr": "山", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "天馬Lv70↑ 神童x2 剣城x2", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/p/t/ptzd97ryes0.webm" },
  { "name": "デスブレイク", "type": "シュート", "subType": "", "attr": "山", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "バダップx1 ミストレx1 エスカバx1", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/9/l/9l1chmu9qfe.webm" },
  { "name": "C カオスメテオ", "type": "シュート", "subType": "カウンター", "attr": "山", "tension": 100, "at": 100, "get": "VSストア", "material": "激のコインx27 ヴィクトリーストーンx75", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/n/o/no5_8uusxec.webm" },
  { "name": "L ジェットストリーム", "type": "シュート", "subType": "ロング", "attr": "山", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "円堂(無印)x1 豪炎寺(無印)x1 虎丸(無印)x1", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/p/c/pcbrl_h2fak.webm" },
  // 無属性
  { "name": "オメガアタック", "type": "シュート", "subType": "", "attr": "無", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "アルファx1 ベータx1 ガンマx1", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/y/o/yohv_yydf4c.webm" },
  { "name": "ギャラクティカフォール", "type": "シュート", "subType": "", "attr": "無", "tension": 100, "at": 100, "get": "VSストア", "material": "裂のコインx27 ヴィクトリーストーンx75", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/8/a/8af--dlksnc.webm" },
  { "name": "グレートブラスター", "type": "シュート", "subType": "", "attr": "無", "tension": 100, "at": 100, "get": "VSストア", "material": "裂のコインx27 ヴィクトリーストーンx75", "videoUrl": "https://dxi4wb638ujep.cloudfront.net/1/k/r/j/rjb7j6fc1n0.webm" },


  // ==========================================
  // ドリブル技
  // ==========================================
  // --- テンション 30 (無属性/共通) ---
  { "name": "かく乱ステップ", "type": "ドリブル", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "友情x2", "videoUrl":"" },
  { "name": "ヒールリフト", "type": "ドリブル", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "目標x2", "videoUrl":"" },
  { "name": "フェイント抜き", "type": "ドリブル", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "熱血x2", "videoUrl":"" },
  { "name": "ホッピングトリック", "type": "ドリブル", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "秘宝堂", "material": "感謝x2", "videoUrl":"" },
  { "name": "また抜き", "type": "ドリブル", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "秘宝堂", "material": "夢x2", "videoUrl":"" },
  { "name": "ゆさぶりフェイント", "type": "ドリブル", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "秘宝堂", "material": "元気x2", "videoUrl":"" },
  // --- テンション 50 ---
  // 風属性
  { "name": "エンデバーラン", "type": "ドリブル", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "愛x3 夢x4", "videoUrl": "" },
  { "name": "ジグザグスパーク", "type": "ドリブル", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "感謝x1 目標x2", "videoUrl": "" },
  { "name": "竜巻旋風", "type": "ドリブル", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "秘宝堂", "material": "熱血x1", "videoUrl": "" },
  { "name": "玉乗りピエロ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "VSストア", "material": "裂のコインx6 滅のコインx6", "videoUrl": "" },
  { "name": "毒霧の術", "type": "ドリブル", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "VSストア", "material": "激のコインx3 裂のコインx6", "videoUrl": "" },
  { "name": "なみのりピエロ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "秘宝堂 お台場支部 | VSストア", "material": "熱血x1 夢x1 | 裂のコインx9 滅のコインx9", "videoUrl": "" },
  { "name": "ビューティフルフープ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "VSストア", "material": "激のコインx6 滅のコインx6", "videoUrl": "" },
  { "name": "ムーンサルト", "type": "ドリブル", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "VSストア", "material": "激のコインx6 滅のコインx6", "videoUrl": "" },
  // 林属性
  { "name": "スーパースキャン", "type": "ドリブル", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "影の計画書ページx14 秋のマネージャー日記ページx16", "videoUrl": "" },
  { "name": "トリックボール", "type": "ドリブル", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂", "material": "夢x7 感謝x1", "videoUrl": "" },
  { "name": "呪い", "type": "ドリブル", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "練習はおにぎりx16 星空の下でx12", "videoUrl": "" },
  { "name": "フューチャー・アイ", "type": "ドリブル", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "影の計画書ページx16 秋のマネージャー日記ページx10", "videoUrl": "" },
  { "name": "分身フェイント", "type": "ドリブル", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂", "material": "感謝x4 目標x4", "videoUrl": "" },
  { "name": "マジック", "type": "ドリブル", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "VSストア", "material": "裂のコインx3 滅のコインx6", "videoUrl": "" },
  { "name": "マタドールフェイント", "type": "ドリブル", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂", "material": "友情x5 目標x2", "videoUrl": "" },
  // 火属性
  { "name": "オーバーグロウ", "type": "ドリブル", "subType": "", "attr": "火", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "熱血x3 感謝x6", "videoUrl": "" },
  { "name": "導火線", "type": "ドリブル", "subType": "", "attr": "火", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "練習はおにぎりx16 影の計画書ページx14", "videoUrl": "" },
  { "name": "ドッグラン", "type": "ドリブル", "subType": "", "attr": "火", "tension": 50, "at": 50, "get": "秘宝堂", "material": "熱血x2 感謝x3", "videoUrl": "" },
  // 山属性
  { "name": "カンガルーキック", "type": "ドリブル", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "秘宝堂", "material": "友情x4", "videoUrl": "" },
  { "name": "五里霧中", "type": "ドリブル", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "練習はおにぎりx30 秋のマネージャー日記ページx28", "videoUrl": "" },
  { "name": "スーパーアルマジロ", "type": "ドリブル", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "目標x2 夢x1", "videoUrl": "" },
  { "name": "ダッシュアクセル", "type": "ドリブル", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "秘宝堂", "material": "目標x2", "videoUrl": "" },
  { "name": "ブーメランフェイント", "type": "ドリブル", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "秘宝堂", "material": "感謝x1 感謝x3", "videoUrl": "" },
  { "name": "モグラフェイント", "type": "ドリブル", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "愛x2 感謝x2", "videoUrl": "" },
  { "name": "モンキーターン", "type": "ドリブル", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "秘宝堂", "material": "目標x2", "videoUrl": "" },
  // --- テンション 60 ---
  // 風属性
  { "name": "リボンシャワー", "type": "ドリブル", "subType": "", "attr": "風", "tension": 60, "at": 50, "get": "クロニクル百貨店", "material": "影の計画書ページx18 星空の下でx12", "videoUrl": "" },
  { "name": "ウォーターベール", "type": "ドリブル", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x4 愛x3", "videoUrl": "" },
  { "name": "エレガントブレード", "type": "ドリブル", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "VSストア", "material": "裂のコインx15 滅のコインx15", "videoUrl": "" },
  { "name": "カマイタチ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "影の計画書ページx14 秋のマネージャー日記ページx22", "videoUrl": "" },
  { "name": "疾風ダッシュ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "影の計画書ページx10 星空の下でx12", "videoUrl": "" },
  { "name": "スピニングアッパー", "type": "ドリブル", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x2 愛x3", "videoUrl": "" },
  { "name": "セカンドライフフープ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "VSストア", "material": "裂のコインx15 滅のコインx15", "videoUrl": "" },
  { "name": "ゼロヨン", "type": "ドリブル", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x12 星空の下でx40", "videoUrl": "" },
  { "name": "そよかぜステップ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "影の計画書ページx12 星空の下でx10", "videoUrl": "" },
  { "name": "ナイアガラフォールズ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "熱血x5 感謝x4", "videoUrl": "" },
  { "name": "ホワイトブレード", "type": "ドリブル", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "愛x1 感謝x6", "videoUrl": "" },
  { "name": "やまびこステップ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx15 裂のコインx15", "videoUrl": "" },
  // 火属性
  { "name": "バーニングサマー", "type": "ドリブル", "subType": "", "attr": "火", "tension": 60, "at": 50, "get": "VSストア", "material": "激のコインx6 滅のコインx3", "videoUrl": "" },
  { "name": "フレイムベール", "type": "ドリブル", "subType": "", "attr": "火", "tension": 60, "at": 50, "get": "クロニクル百貨店", "material": "練習はおにぎりx12 秋のマネージャー日記ページx16", "videoUrl": "" },
  { "name": "マッドジャグラー", "type": "ドリブル", "subType": "", "attr": "火", "tension": 60, "at": 50, "get": "クロニクル百貨店", "material": "練習はおにぎりx14 星空の下でx20", "videoUrl": "" },
  { "name": "ジャッジスルー", "type": "ドリブル", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx9 滅のコインx9", "videoUrl": "" },
  { "name": "スパークエッジドリブル", "type": "ドリブル", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "熱血x1 友情x4", "videoUrl": "" },
  { "name": "ツバメ返し", "type": "ドリブル", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "目標x2 夢x3", "videoUrl": "" },
  { "name": "ならく落とし", "type": "ドリブル", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x5", "videoUrl": "" },
  { "name": "ハヤブサ返し", "type": "ドリブル", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx15 裂のコインx15", "videoUrl": "" },
  { "name": "バンジースラスト", "type": "ドリブル", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x3 愛x3", "videoUrl": "" },
  { "name": "ヒートタックル", "type": "ドリブル", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "影の計画書ページx26 秋のマネージャー日記ページx30", "videoUrl": "" },
  { "name": "ひとりワンツー", "type": "ドリブル", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "熱血x1 元気x1", "videoUrl": "" },
  { "name": "ロックンロールビート", "type": "ドリブル", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "VSストア", "material": "裂のコインx15 滅のコインx15", "videoUrl": "" },
  // 林属性
  { "name": "Zスラッシュ", "type": "ドリブル", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx9 滅のコインx9", "videoUrl": "" },
  { "name": "あそこにおにぎり", "type": "ドリブル", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx15 裂のコインx15", "videoUrl": "" },
  { "name": "あやかしドリブル", "type": "ドリブル", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx15 滅のコインx15", "videoUrl": "" },
  { "name": "イリュージョンボール", "type": "ドリブル", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおにぎりx26 秋のマネージャー日記ページx10", "videoUrl": "" },
  { "name": "残像", "type": "ドリブル", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "感謝x2 目標x2", "videoUrl": "" },
  { "name": "トランスムーブ", "type": "ドリブル", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x1 元気x3", "videoUrl": "" },
  { "name": "プレストターン", "type": "ドリブル", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおにぎりx22 星空の下でx12", "videoUrl": "" },
  { "name": "マトリクスアイ", "type": "ドリブル", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "VSストア", "material": "裂のコインx15 滅のコインx15", "videoUrl": "" },
  { "name": "まぼろしドリブル", "type": "ドリブル", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "熱血x2 目標x3", "videoUrl": "" },
  { "name": "ワープドライブ", "type": "ドリブル", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x10 秋のマネージャー日記ページx18", "videoUrl": "" },
  // 山属性
  { "name": "アクロバットキープ", "type": "ドリブル", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "影の計画書ページx16 秋のマネージャー日記ページx12", "videoUrl": "" },
  { "name": "オラオラメンチ", "type": "ドリブル", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "心うつ格言x10 星空の下でx15", "videoUrl": "" },
  { "name": "クレイモア", "type": "ドリブル", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x3 感謝x5", "videoUrl": "" },
  { "name": "スーパーエラシコ", "type": "ドリブル", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "感謝x6 目標x3", "videoUrl": "" },
  { "name": "スカイウォーク", "type": "ドリブル", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "VSストア", "material": "裂のコインx12 滅のコインx12", "videoUrl": "" },
  { "name": "ニニンサンキャク", "type": "ドリブル", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x3 愛x3", "videoUrl": "" },
  { "name": "プリマドンナ", "type": "ドリブル", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx9 裂のコインx12", "videoUrl": "" },
  // --- テンション 70 ---
  // 風属性
  { "name": "合気道", "type": "ドリブル", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "友情x2 感謝x3", "videoUrl": "" },
  { "name": "エアライド", "type": "ドリブル", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "秘宝堂", "material": "熱血x4 感謝x10", "videoUrl": "" },
  { "name": "エンゼルボール", "type": "ドリブル", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x32 秋のマネージャー日記ページx26", "videoUrl": "" },
  { "name": "オーロラドリブル", "type": "ドリブル", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "秘宝堂", "material": "友情x1 目標x4", "videoUrl": "" },
  { "name": "風穴ドライブ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "感謝x2 目標x3", "videoUrl": "" },
  { "name": "そよヤギステップ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx9 裂のコインx9", "videoUrl": "" },
  { "name": "ダッシュストーム", "type": "ドリブル", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "秘宝堂", "material": "感謝x2 目標x6", "videoUrl": "" },
  { "name": "風神の舞", "type": "ドリブル", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx9 滅のコインx9", "videoUrl": "" },
  // 林属性
  { "name": "メロディウェイブ", "type": "ドリブル", "subType": "", "attr": "林", "tension": 70, "at": 60, "get": "VSストア", "material": "裂のコインx9 滅のコインx6", "videoUrl": "" },
  { "name": "ウルトラムーン", "type": "ドリブル", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "熱血x2 友情x3", "videoUrl": "" },
  { "name": "オリンポスハーモニー", "type": "ドリブル", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "秘宝堂", "material": "友情x6 愛x5", "videoUrl": "" },
  { "name": "サザンクロスカット", "type": "ドリブル", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x28 星空の下でx28", "videoUrl": "" },
  { "name": "デスサイズロー", "type": "ドリブル", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x16 星空の下でx22", "videoUrl": "" },
  { "name": "デビルボール", "type": "ドリブル", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x28 円堂伝説の軌跡x26", "videoUrl": "" },
  { "name": "デュアルパス", "type": "ドリブル", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx12 練習はおにぎりx36", "videoUrl": "" },
  // 火属性
  { "name": "アグレッシブビート", "type": "ドリブル", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx12 滅のコインx12", "videoUrl": "" },
  { "name": "ジ・イカロス", "type": "ドリブル", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "友情x6 目標x9", "videoUrl": "" },
  { "name": "シルクロード", "type": "ドリブル", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "VSストア", "material": "裂のコインx12 滅のコインx12", "videoUrl": "" },
  { "name": "ブーストグライダー", "type": "ドリブル", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx20 円堂伝説の軌跡x24", "videoUrl": "" },
  { "name": "ブラックメイル", "type": "ドリブル", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "熱血x3 目標x6", "videoUrl": "" },
  { "name": "ブリタニアクロス", "type": "ドリブル", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "秘宝堂", "material": "感謝x7 目標x1", "videoUrl": "" },
  { "name": "メテオシャワー", "type": "ドリブル", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "友情x3 感謝x3", "videoUrl": "" },
  { "name": "ライトニングアクセル", "type": "ドリブル", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "影の計画書ページx26 星空の下でx22", "videoUrl": "" },
  { "name": "ラウンドスパーク", "type": "ドリブル", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x12 影の計画書ページx32", "videoUrl": "" },
  { "name": "烈風ダッシュ", "type": "ドリブル", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x14 練習はおにぎりx26", "videoUrl": "" },
  // 山属性
  { "name": "地獄車", "type": "ドリブル", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx9 裂のコインx12", "videoUrl": "" },
  { "name": "デザートドリフト", "type": "ドリブル", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx12 滅のコインx9", "videoUrl": "" },
  { "name": "昇り龍", "type": "ドリブル", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x10 影の計画書ページx34", "videoUrl": "" },
  // 無属性
  { "name": "オールデリート", "type": "ドリブル", "subType": "", "attr": "無", "tension": 70, "at": 60, "get": "VSストア", "material": "激のコインx6 裂のコインx9", "videoUrl": "" },
  // --- テンション 80 ---
  // 風属性
  { "name": "ヘブンズタイム", "type": "ドリブル", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x20 影の計画書ページx38", "videoUrl": "" },
  { "name": "リキッドフロウ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx10 影の計画書ページx36", "videoUrl": "" },
  // 林属性
  { "name": "ストームゾーン", "type": "ドリブル", "subType": "", "attr": "林", "tension": 80, "at": 70, "get": "VSストア", "material": "裂のコインx9 滅のコインx12", "videoUrl": "" },
  { "name": "あそこにUFO", "type": "ドリブル", "subType": "", "attr": "林", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "心うつ格言x16 秋のマネージャー日記ページx32", "videoUrl": "" },
  { "name": "キラーフィールズ", "type": "ドリブル", "subType": "", "attr": "林", "tension": 80, "at": 85, "get": "スピリット交換所", "material": "佐久間(無印1)x1 不動(無印3)x1", "videoUrl": "" },
  { "name": "マッシュルームホップ", "type": "ドリブル", "subType": "", "attr": "林", "tension": 80, "at": 85, "get": "VSストア", "material": "滅のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  // 火属性
  { "name": "マグマカーペット", "type": "ドリブル", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "VSストア", "material": "裂のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  // 山属性
  { "name": "王の剣", "type": "ドリブル", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "", "material": "", "videoUrl": "" },
  { "name": "クロシオライド", "type": "ドリブル", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "", "material": "", "videoUrl": "" },
  { "name": "ジェネラル・フラッグ", "type": "ドリブル", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "特訓ショップ", "material": "熱血x2 夢x2", "videoUrl": "" },
  { "name": "ディグスルー", "type": "ドリブル", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "VSストア", "material": "激のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  // 無属性
  { "name": "デコイ・リリース", "type": "ドリブル", "subType": "", "attr": "無", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "心うつ格言x14 影の計画書ページx26", "videoUrl": "" },
  // --- テンション 100 ---
  // 風属性
  { "name": "ジャックナイフ", "type": "ドリブル", "subType": "", "attr": "風", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx24 心うつ格言x20", "videoUrl": "" },
  // 林属性
  { "name": "このはランデブー", "type": "ドリブル", "subType": "", "attr": "林", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "森村x1 九坂x1", "videoUrl": "" },
  { "name": "サイキックボウ", "type": "ドリブル", "subType": "", "attr": "林", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx22 心うつ格言x22", "videoUrl": "" },
  // 火属性
  { "name": "ジャッジスルー3", "type": "ドリブル", "subType": "", "attr": "火", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx10 円堂伝説の軌跡x32", "videoUrl": "" },
  { "name": "ディフューズコード", "type": "ドリブル", "subType": "", "attr": "火", "tension": 100, "at": 100, "get": "VSストア", "material": "激のコインx21 ヴィクトリーストーンx75", "videoUrl": "" },
  // 山属性
  { "name": "アトラスソード", "type": "ドリブル", "subType": "", "attr": "山", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx18 円堂伝説の軌跡x30", "videoUrl": "" },
  { "name": "ホログラムロック", "type": "ドリブル", "subType": "", "attr": "山", "tension": 100, "at": 100, "get": "VSストア", "material": "裂のコインx21 ヴィクトリーストーンx75", "videoUrl": "" },
  
  // ==========================================
  // ブロック技
  // ==========================================
  // --- テンション 30 (無属性/共通) ---
  { "name": "ショルダーチャージ", "type": "ブロック", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "感謝x2", "videoUrl":"" },
  { "name": "トリックカット", "type": "ブロック", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "元気x2", "videoUrl":"" },
  { "name": "ひっぱりカット", "type": "ブロック", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "目標x2", "videoUrl":"" },
  { "name": "フェイントプレイ", "type": "ブロック", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "愛x2", "videoUrl":"" },
  { "name": "ローリングカット", "type": "ブロック", "subType": "", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "夢x2", "videoUrl":"" },
  // --- テンション 50 ---
  // 風属性
  { "name": "コイルターン", "type": "ブロック", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "友情x2", "videoUrl": "" },
  { "name": "スパイラルドロー", "type": "ブロック", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "目標x4", "videoUrl": "" },
  { "name": "ディフェンス方程式", "type": "ブロック", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "練習はおにぎりx12 影の計画書ページx14", "videoUrl": "" },
  { "name": "ブレードアタック", "type": "ブロック", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "秘宝堂", "material": "熱血x2 元気x5", "videoUrl": "" },
  { "name": "プロファイルゾーン", "type": "ブロック", "subType": "", "attr": "風", "tension": 50, "at": 50, "get": "秘宝堂", "material": "夢x4 目標x4", "videoUrl": "" },
  { "name": "B スピニングカット", "type": "ブロック", "subType": "シュートブロック", "attr": "風", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "熱血x3", "videoUrl": "" },
  // 林属性
  { "name": "キラースライド", "type": "ブロック", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "熱血x2 元気x1", "videoUrl": "" },
  { "name": "クイックドロウ", "type": "ブロック", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂 お台場支部 | VSストア", "material": "友情x2 | 激のコインx6 滅のコインx3", "videoUrl": "" },
  { "name": "ザ・マトリックス", "type": "ブロック", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "友情x3 目標x6", "videoUrl": "" },
  { "name": "シーフ・アイ", "type": "ブロック", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂", "material": "感謝x1 目標x1", "videoUrl": "" },
  { "name": "ドッペルゲンガー", "type": "ブロック", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "練習はおにぎりx10 影の計画書ページx18", "videoUrl": "" },
  { "name": "フェイクボール", "type": "ブロック", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂", "material": "熱血x2 友情x2", "videoUrl": "" },
  { "name": "マグネットドロー", "type": "ブロック", "subType": "", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂", "material": "感謝x5 目標x3", "videoUrl": "" },
  // 火属性
  { "name": "ダッシュトレイン", "type": "ブロック", "subType": "", "attr": "火", "tension": 50, "at": 50, "get": "秘宝堂 お台場支部 | クロニクル百貨店", "material": "友情x1 愛x1 | じいちゃんのスゴ技特訓ノートページx10 心うつ格言x12", "videoUrl": "" },
  { "name": "B ホーントレイン", "type": "ブロック", "subType": "シュートブロック", "attr": "火", "tension": 50, "at": 50, "get": "VSストア", "material": "裂のコインx6 滅のコインx6", "videoUrl": "" },
  // 山属性
  { "name": "アースエイク", "type": "ブロック", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "友情x5", "videoUrl": "" },
  { "name": "後ろの正面", "type": "ブロック", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "VSストア", "material": "激のコインx6 滅のコインx3", "videoUrl": "" },
  { "name": "四股踏み", "type": "ブロック", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "秘宝堂", "material": "友情x1 目標x1", "videoUrl": "" },
  { "name": "トレースプレス", "type": "ブロック", "subType": "", "attr": "山", "tension": 50, "at": 50, "get": "VSストア", "material": "激のコインx3 滅のコインx6", "videoUrl": "" },
  // 無属性
  { "name": "B ブリッツブリッジ", "type": "ブロック", "subType": "シュートブロック", "attr": "無", "tension": 50, "at": 50, "get": "秘宝堂", "material": "熱血x2 愛x3", "videoUrl": "" },
  // --- テンション 60 ---
  // 風属性
  { "name": "キラーホエール", "type": "ブロック", "subType": "", "attr": "風", "tension": 60, "at": 50, "get": "クロニクル百貨店", "material": "秋のマネージャー日記ページx16 星空の下でx12", "videoUrl": "" },
  { "name": "アイスグランド", "type": "ブロック", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x2 目標x3", "videoUrl": "" },
  { "name": "サイクロン", "type": "ブロック", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "VSストア", "material": "裂のコインx9 滅のコインx9", "videoUrl": "" },
  { "name": "サルガッソー", "type": "ブロック", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "友情x1 感謝x5", "videoUrl": "" },
  { "name": "スノーエンジェル", "type": "ブロック", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "感謝x6 目標x2", "videoUrl": "" },
  { "name": "ダンシングタートル", "type": "ブロック", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "熱血x5 愛x5", "videoUrl": "" },
  { "name": "ディープダイバー", "type": "ブロック", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "感謝x3 元気x2", "videoUrl": "" },
  { "name": "ハリケーンアロー", "type": "ブロック", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "熱血x5 感謝x7", "videoUrl": "" },
  { "name": "フローズンスティール", "type": "ブロック", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x34 影の計画書ページx36", "videoUrl": "" },
  { "name": "ムラクモトラップ", "type": "ブロック", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "VSストア", "material": "裂のコインx15 滅のコインx15", "videoUrl": "" },
  { "name": "ワンダートラップ", "type": "ブロック", "subType": "", "attr": "風", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx9 裂のコインx9", "videoUrl": "" },
  { "name": "B エアーパレット", "type": "ブロック", "subType": "シュートブロック", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x2 元気x5", "videoUrl": "" },
  { "name": "B ザ・タワー", "type": "ブロック", "subType": "シュートブロック", "attr": "風", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x10 星空の下でx30", "videoUrl": "" },
  { "name": "B 旋風陣", "type": "ブロック", "subType": "シュートブロック", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "目標x3 夢x2", "videoUrl": "" },
  // 林属性
  { "name": "怨霊", "type": "ブロック", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおにぎりx24 秋のマネージャー日記ページx26", "videoUrl": "" },
  { "name": "影縫い", "type": "ブロック", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂 お台場支部 | VSストア", "material": "熱血x1 夢x3 | 激のコインx9 裂のコインx12", "videoUrl": "" },
  { "name": "コイルアッパー", "type": "ブロック", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x3 目標x2", "videoUrl": "" },
  { "name": "蜘蛛の糸", "type": "ブロック", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂 お台場支部 | VSストア", "material": "目標x1 夢x4 | 激のコインx9 裂のコインx12", "videoUrl": "" },
  { "name": "ザ・ミスト", "type": "ブロック", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "秋のマネージャー日記ページx16 星空の下でx18", "videoUrl": "" },
  { "name": "ディメンションカット", "type": "ブロック", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおにぎりx40 円堂伝説の軌跡x24", "videoUrl": "" },
  { "name": "ハーヴェスト", "type": "ブロック", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x2 目標x5", "videoUrl": "" },
  { "name": "分身ディフェンス", "type": "ブロック", "subType": "", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x16 影の計画書ページx36", "videoUrl": "" },
  { "name": "B アインザッツ", "type": "ブロック", "subType": "シュートブロック", "attr": "林", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx9 滅のコインx9", "videoUrl": "" },
  { "name": "B ダークミスト", "type": "ブロック", "subType": "シュートブロック", "attr": "林", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx15 裂のコインx15", "videoUrl": "" },
  { "name": "B ハンターズネット", "type": "ブロック", "subType": "シュートブロック", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおにぎりx12 星空の下でx16", "videoUrl": "" },
  // 火属性
  { "name": "イグナイトスティール", "type": "ブロック", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "心うつ格言x32 円堂伝説の軌跡x34", "videoUrl": "" },
  { "name": "クレイジーサンライト", "type": "ブロック", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおおにぎりx24 秋のマネージャー日記ページx22", "videoUrl": "" },
  { "name": "ジグザグフレイム", "type": "ブロック", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "友情x3 目標x1", "videoUrl": "" },
  { "name": "地走り火炎", "type": "ブロック", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x1 目標x3", "videoUrl": "" },
  { "name": "スクリュードライバー", "type": "ブロック", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x6 目標x2", "videoUrl": "" },
  { "name": "ツインミキサー", "type": "ブロック", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x5", "videoUrl": "" },
  { "name": "ドッカントレイン", "type": "ブロック", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx15 滅のコインx15", "videoUrl": "" },
  { "name": "ビッグシザース", "type": "ブロック", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x2 目標x5", "videoUrl": "" },
  { "name": "フェイクボンバー", "type": "ブロック", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx9 裂のコインx9", "videoUrl": "" },
  { "name": "フォトンフラッシュ", "type": "ブロック", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおにぎりx28 秋のマネージャー日記ページx28", "videoUrl": "" },
  { "name": "ローリングスライド", "type": "ブロック", "subType": "", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x1 目標x7", "videoUrl": "" },
  { "name": "B オラオラ四股踏み", "type": "ブロック", "subType": "シュートブロック", "attr": "火", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx15 滅のコインx15", "videoUrl": "" },
  { "name": "B シューティングスター", "type": "ブロック", "subType": "シュートブロック", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "愛x3 目標x6", "videoUrl": "" },
  { "name": "B スーパー四股踏み", "type": "ブロック", "subType": "シュートブロック", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x4", "videoUrl": "" },
  { "name": "B ポルケイノカット", "type": "ブロック", "subType": "シュートブロック", "attr": "火", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "熱血x1 元気x3", "videoUrl": "" },
  { "name": "B もちもち黄粉餅", "type": "ブロック", "subType": "シュートブロック", "attr": "火", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x16 星空の下でx38", "videoUrl": "" },
  // 山属性
  { "name": "ウィリー・ウィリー", "type": "ブロック", "subType": "", "attr": "山", "tension": 60, "at": 50, "get": "VSストア", "material": "裂のコインx6 滅のコインx3", "videoUrl": "" },
  { "name": "B ヘビーベイビー", "type": "ブロック", "subType": "シュートブロック", "attr": "山", "tension": 60, "at": 50, "get": "VSストア", "material": "裂のコインx6 裂のコインx3", "videoUrl": "" },
  { "name": "グレイブストーン", "type": "ブロック", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x3 友情x2", "videoUrl": "" },
  { "name": "ストーンプリズン", "type": "ブロック", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "感謝x3 目標x3", "videoUrl": "" },
  { "name": "メタルハンマー", "type": "ブロック", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx15 裂のコインx15", "videoUrl": "" },
  { "name": "パワーチャージ", "type": "ブロック", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "影の計画書ページx18 秋のマネージャー日記ページx20", "videoUrl": "" },
  { "name": "ブロックサーカス", "type": "ブロック", "subType": "", "attr": "山", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x8 感謝x1", "videoUrl": "" },
  { "name": "B オケハザマウォール", "type": "ブロック", "subType": "シュートブロック", "attr": "山", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx9 滅のコインx9", "videoUrl": "" },
  { "name": "B ザ・ウォール", "type": "ブロック", "subType": "シュートブロック", "attr": "山", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおおにぎりx24 秋のマネージャー日記ページx28", "videoUrl": "" },
  { "name": "B ビバ！万里の長城", "type": "ブロック", "subType": "シュートブロック", "attr": "山", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "影の計画書ページx22 星空の下でx12", "videoUrl": "" },
  // 無属性
  { "name": "B グランドスイーパー", "type": "ブロック", "subType": "シュートブロック", "attr": "無", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x3 夢x4", "videoUrl": "" },
  // --- テンション 70 ---
  // 風属性
  { "name": "海神・ザ・クエイク", "type": "ブロック", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "友情x3 感謝x4", "videoUrl": "" },
  { "name": "ゴー・トゥ・ヘブン", "type": "ブロック", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx12 裂のコインx12", "videoUrl": "" },
  { "name": "ダブルサイクロン", "type": "ブロック", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "熱血x2 友情x4", "videoUrl": "" },
  { "name": "デザートストーム", "type": "ブロック", "subType": "", "attr": "風", "tension": 70, "at": 70, "get": "VSストア", "material": "裂のコインx12 滅のコインx12", "videoUrl": "" },
  { "name": "B 真空魔", "type": "ブロック", "subType": "シュートブロック", "attr": "風", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x12 星空の下でx24", "videoUrl": "" },
  // 林属性
  { "name": "グッドスメル", "type": "ブロック", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx12 裂のコインx12", "videoUrl": "" },
  { "name": "ゴー・トゥ・ヘル", "type": "ブロック", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx9 滅のコインx12", "videoUrl": "" },
  { "name": "このはロール", "type": "ブロック", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページ 秋のマネージャー日記ページx36", "videoUrl": "" },
  { "name": "デュアルストーム", "type": "ブロック", "subType": "", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x10 星空の下x28", "videoUrl": "" },
  { "name": "B アステロイドベルト", "type": "ブロック", "subType": "シュートブロック", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x16 星空の下でx32", "videoUrl": "" },
  { "name": "B デーモンカット", "type": "ブロック", "subType": "シュートブロック", "attr": "林", "tension": 70, "at": 70, "get": "秘宝堂", "material": "元気x8 目標x2", "videoUrl": "" },
  { "name": "B ディープミスト", "type": "ブロック", "subType": "シュートブロック", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x16 練習はおにぎりx36", "videoUrl": "" },
  { "name": "B デスサイズミドル", "type": "ブロック", "subType": "シュートブロック", "attr": "林", "tension": 70, "at": 70, "get": "VSストア", "material": "裂のコインx9 滅のコインx12", "videoUrl": "" },
  // 火属性
  { "name": "フットワークドロウ", "type": "ブロック", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx9 裂のコインx12", "videoUrl": "" },
  { "name": "フレイムダンス", "type": "ブロック", "subType": "", "attr": "火", "tension": 70, "at": 70, "get": "秘宝堂 お台場支部 | VSストア", "material": "熱血x1 友情x4 | 裂のコインx12 滅のコインx9", "videoUrl": "" },
  { "name": "B アスタリスクロック", "type": "ブロック", "subType": "シュートブロック", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "激のコインx12 滅のコインx9", "videoUrl": "" },
  { "name": "B 裁きの鉄槌", "type": "ブロック", "subType": "シュートブロック", "attr": "火", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "練習はおにぎりx24 円堂伝説の軌跡x12", "videoUrl": "" },
  // 山属性
  { "name": "エレファントプレス", "type": "ブロック", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "秘宝堂", "material": "熱血x1 夢x6", "videoUrl": "" },
  { "name": "かごめかごめ", "type": "ブロック", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx16 心うつ格言x30", "videoUrl": "" },
  { "name": "フラクタルハウス", "type": "ブロック", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "秘宝堂", "material": "熱血x5", "videoUrl": "" },
  { "name": "メガクエイク", "type": "ブロック", "subType": "", "attr": "山", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "熱血x1 愛x6", "videoUrl": "" },
  { "name": "B アイアンウォール", "type": "ブロック", "subType": "シュートブロック", "attr": "山", "tension": 70, "at": 70, "get": "VSストア", "material": "裂のコインx12 滅のコインx12", "videoUrl": "" },
  { "name": "B アトランティスウォール", "type": "ブロック", "subType": "シュートブロック", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x18 秋のマネージャー日記ページx20", "videoUrl": "" },
  { "name": "B かっとびディフェンス", "type": "ブロック", "subType": "シュートブロック", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "影の計画書ページx16 星空の下でx14", "videoUrl": "" },
  { "name": "B グラビティション", "type": "ブロック", "subType": "シュートブロック", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x20 星空の下でx34", "videoUrl": "" },
  { "name": "B ザ・マウンテン", "type": "ブロック", "subType": "シュートブロック", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x20 練習はおにぎりx24", "videoUrl": "" },
  // 無属性
  { "name": "バニシングカット", "type": "ブロック", "subType": "", "attr": "無", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "熱血x4 友情x8", "videoUrl": "" },
  // --- テンション 80、AT70 ---
  // 火属性
  { "name": "ボルカニックフライ", "type": "ブロック", "subType": "", "attr": "火", "tension": 80, "at": 70, "get": "VSストア", "material": "激のコインx12 裂のコインx9", "videoUrl": "" },
  // --- テンション 80 ---
  // 風属性
  { "name": "古代の翼", "type": "ブロック", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "", "material": "", "videoUrl": "" },
  { "name": "パーフェクトタワー", "type": "ブロック", "subType": "", "attr": "風", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx16 円堂伝説の軌跡x10", "videoUrl": "" },
  { "name": "B ウォーターフォール", "type": "ブロック", "subType": "シュートブロック", "attr": "風", "tension": 80, "at": 85, "get": "VSストア", "material": "滅のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  // 林属性
  { "name": "きらきらイリュージョン", "type": "ブロック", "subType": "", "attr": "林", "tension": 80, "at": 85, "get": "秘宝堂", "material": "愛x7 感謝x8", "videoUrl": "" },
  { "name": "シグマゾーン", "type": "ブロック", "subType": "", "attr": "林", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx20 心うつ格言x38", "videoUrl": "" },
  // 火属性
  { "name": "ローリングカッター", "type": "ブロック", "subType": "", "attr": "火", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx12 星空の下でx30", "videoUrl": "" },
  { "name": "B 一夜城", "type": "ブロック", "subType": "シュートブロック", "attr": "火", "tension": 80, "at": 85, "get": "秘宝堂 お台場支部 | VSストア", "material": "感謝x2 目標x3 | 裂のコインx21 ヴィクトリーストーンx60", "videoUrl": "" },
  { "name": "B ラ・フラム", "type": "ブロック", "subType": "シュートブロック", "attr": "火", "tension": 80, "at": 85, "get": "", "material": "", "videoUrl": "" },
  // 山属性
  { "name": "ザ・フォート", "type": "ブロック", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "特訓ショップ", "material": "熱血x2 元気x2", "videoUrl": "" },
  { "name": "ディグアップ", "type": "ブロック", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "VSストア", "material": "激のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  { "name": "ノーエスケイプ", "type": "ブロック", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "秘宝堂", "material": "熱血x3 友情x8", "videoUrl": "" },
  { "name": "ボディシールド", "type": "ブロック", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "秘宝堂", "material": "友情x2 感謝x9", "videoUrl": "" },
  { "name": "無影乱舞", "type": "ブロック", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "特訓ショップ", "material": "愛x7 感謝x1", "videoUrl": "" },
  { "name": "ロックハンマー", "type": "ブロック", "subType": "", "attr": "山", "tension": 80, "at": 85, "get": "VSストア", "material": "裂のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  // --- テンション 85 ---
  // 山属性
  { "name": "マジカルフラワー", "type": "ブロック", "subType": "", "attr": "山", "tension": 85, "at": 85, "get": "VSストア", "material": "裂のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  { "name": "B グランドクエイク", "type": "ブロック", "subType": "シュートブロック", "attr": "山", "tension": 85, "at": 85, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx10 練習はおにぎりx38", "videoUrl": "" },
  // --- テンション 100 ---
  // 風属性
  { "name": "ステルスウォーク", "type": "ブロック", "subType": "", "attr": "風", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx24 心うつ格言x20", "videoUrl": "" },
  // 林属性
  { "name": "テンタクルホールド", "type": "ブロック", "subType": "", "attr": "林", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx18 円堂伝説の軌跡x28", "videoUrl": "" },
  { "name": "B ディープジャングル", "type": "ブロック", "subType": "シュートブロック", "attr": "林", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx20 心うつ格言x24", "videoUrl": "" },
  // 火属性
  { "name": "ジャッジメント・レイ", "type": "ブロック", "subType": "", "attr": "火", "tension": 100, "at": 100, "get": "VSストア", "material": "激のコインx27 ヴィクトリーストーンx75", "videoUrl": "" },
  { "name": "フェイタルリフト", "type": "ブロック", "subType": "", "attr": "火", "tension": 100, "at": 100, "get": "VSストア", "material": "滅のコインx27 ヴィクトリーストーンx75", "videoUrl": "" },
  // 山属性
  { "name": "ファランクス", "type": "ブロック", "subType": "", "attr": "山", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx20 円堂伝説の軌跡x28", "videoUrl": "" },


  // ==========================================
  // キーパー技
  // ==========================================
  // --- テンション 30 (無属性/共通) ---
  { "name": "パワーハンドキャッチ", "type": "キーパー", "subType": "キャッチ", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "愛x2", "videoUrl":"" },
  { "name": "ふんばりキャッチ", "type": "キーパー", "subType": "パンチ", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "友情x2", "videoUrl":"" },
  { "name": "P きあいのパンチ", "type": "キーパー", "subType": "キャッチ", "attr": "無", "tension": 30, "at": 30, "get": "特訓ショップ", "material": "熱血x2", "videoUrl":"" },
  // --- テンション 50 ---
  // 風属性
  { "name": "つむじ", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 50, "at": 50, "get": "秘宝堂", "material": "熱血x4", "videoUrl": "" },
  { "name": "トルネードキャッチ", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "秋のマネージャー日記ページx12 星空の下でx16", "videoUrl": "" },
  { "name": "花吹雪", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 50, "at": 50, "get": "秘宝堂", "material": "熱血x2 目標x2", "videoUrl": "" },
  { "name": "ムーンサルトスタンプ", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 50, "at": 50, "get": "秘宝堂", "material": "目標x2", "videoUrl": "" },
  { "name": "ワイルドダンク", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 50, "at": 50, "get": "VSストア", "material": "激のコインx6 裂のコインx6", "videoUrl": "" },
  { "name": "P セーフティープロテクト", "type": "キーパー", "subType": "パンチ", "attr": "風", "tension": 50, "at": 50, "get": "VSストア", "material": "裂のコインx9 滅のコインx9", "videoUrl": "" },
  { "name": "P ハイドロアンカー", "type": "キーパー", "subType": "パンチ", "attr": "風", "tension": 50, "at": 50, "get": "秘宝堂", "material": "元気x4 目標x2", "videoUrl": "" },
  // 林属性
  { "name": "影掴み", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 50, "at": 50, "get": "秘宝堂", "material": "目標x6 元気x1", "videoUrl": "" },
  { "name": "キラーブレード", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "影の計画書ページx14 秋のマネージャー日記ページx16", "videoUrl": "" },
  { "name": "シュートポケット", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "愛x2 目標x3", "videoUrl": "" },
  { "name": "ゆがむ空間", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 50, "at": 50, "get": "VSストア", "material": "激のコインx6 滅のコインx3", "videoUrl": "" },
  // 火属性
  { "name": "火炎放射", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 50, "at": 50, "get": "秘宝堂 お台場支部 | VSストア", "material": "熱血x2 元気x2 | 激のコインx3 滅のコインx6", "videoUrl": "" },
  { "name": "スウェットスティルネス", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "感謝x3 目標x2", "videoUrl": "" },
  { "name": "バーニングキャッチ", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "影の計画書ページx24 秋のマネージャー日記ページx16", "videoUrl": "" },
  { "name": "パワースパイク", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 50, "at": 50, "get": "特訓ショップ", "material": "目標x3", "videoUrl": "" },
  { "name": "プレッシャーパンチ", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 50, "at": 50, "get": "クロニクル百貨店", "material": "練習はおにぎりx10 影の計画書ページx18", "videoUrl": "" },
  { "name": "P 熱血パンチ", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 50, "at": 50, "get": "VSストア", "material": "激のコインx9 裂のコインx3", "videoUrl": "" },
  { "name": "P 熱血ヘッド", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 50, "at": 50, "get": "VSストア", "material": "激のコインx6 裂のコインx3", "videoUrl": "" },
  // 山属性
  { "name": "エクセレントブレスト", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 50, "at": 50, "get": "秘宝堂", "material": "目標x4", "videoUrl": "" },
  { "name": "ド根性キャッチ", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 50, "at": 50, "get": "VSストア", "material": "裂のコインx6 滅のコインx6", "videoUrl": "" },
  { "name": "ワイルドクロー", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 50, "at": 50, "get": "VSストア", "material": "激のコインx6 滅のコインx6", "videoUrl": "" },
  // --- テンション 60、AT50 ---
  // 風属性
  { "name": "オーロラカーテン", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 60, "at": 50, "get": "クロニクル百貨店", "material": "秋のマネージャー日記ページx22 星空の下でx24", "videoUrl": "" },
  { "name": "P ラピッドウィップ", "type": "キーパー", "subType": "パンチ", "attr": "風", "tension": 60, "at": 50, "get": "VSストア", "material": "激のコインx3 滅のコインx6", "videoUrl": "" },
  // 林属性
  { "name": "バットアタック", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 60, "at": 50, "get": "クロニクル百貨店", "material": "練習はおにぎりx16 星空の下でx18", "videoUrl": "" },
  // --- テンション 60 ---
  // 風属性
  { "name": "アイスブロック", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "友情x1 夢x6", "videoUrl": "" },
  { "name": "エレキトラップ", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "友情x3 元気x5", "videoUrl": "" },
  { "name": "ガラティーン", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x5 元気x1", "videoUrl": "" },
  { "name": "クリスタルバリア", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x6 目標x1", "videoUrl": "" },
  { "name": "グレートバリアリーフ", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x2 愛x3", "videoUrl": "" },
  { "name": "ストームライダー", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x3 目標x3", "videoUrl": "" },
  { "name": "ニードルハンマー", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x6 夢x1", "videoUrl": "" },
  { "name": "明鏡止水", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "熱血x3 友情x2", "videoUrl": "" },
  { "name": "氷結の舞", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "愛x4 感謝x1", "videoUrl": "" },
  { "name": "P リバースワールド", "type": "キーパー", "subType": "パンチ", "attr": "風", "tension": 60, "at": 60, "get": "", "material": "", "videoUrl": "" },
  // 林属性
  { "name": "ゴッドハンド", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "影の計画書ページx26 星空の下でx26", "videoUrl": "" },
  { "name": "ジャイロセービング", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "感謝x6 夢x2", "videoUrl": "" },
  { "name": "ツイストリーチ", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 60, "at": 60, "get": "VSストア", "material": "裂のコインx9 滅のコインx6", "videoUrl": "" },
  { "name": "デュアルスマッシュ", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x2 目標x6", "videoUrl": "" },
  { "name": "ドーンシャウト", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂 お台場支部 | VSストア", "material": "熱血x1 友情x2 | 裂のコインx9 滅のコインx9", "videoUrl": "" },
  { "name": "ビッグスパイダー", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x1 目標x6", "videoUrl": "" },
  { "name": "ブラックホール", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x3 夢x1", "videoUrl": "" },
  // 火属性
  { "name": "バーンアウト", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "元気x5 目標x2", "videoUrl": "" },
  { "name": "ロケットこぶし", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x3 感謝x2", "videoUrl": "" },
  { "name": "P カウンターストライク", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "心うつ格言x14 影の計画書ページx28", "videoUrl": "" },
  { "name": "P シュートブレイク", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 60, "at": 60, "get": "秘宝堂", "material": "感謝x2 目標x7", "videoUrl": "" },
  { "name": "P 大爆発張り手", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "友情x1 夢x4", "videoUrl": "" },
  { "name": "P 爆裂パンチ", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 60, "at": 60, "get": "VSストア", "material": "裂のコインx12 滅のコインx9", "videoUrl": "" },
  { "name": "P パワーシールド", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "友情x4", "videoUrl": "" },
  // 山属性
  { "name": "カポエィラスナッチ", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x1 目標x5", "videoUrl": "" },
  { "name": "グラビティデザート", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "愛x2 感謝x2", "videoUrl": "" },
  { "name": "ゴールずらし", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "練習はおにぎりx28 星空の下でx28", "videoUrl": "" },
  { "name": "ゴッドハンド", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 60, "at": 60, "get": "クロニクル百貨店", "material": "秋のマネージャー日記ページx16 星空の下でx26", "videoUrl": "" },
  { "name": "タフネスブロック", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "目標x2", "videoUrl": "" },
  { "name": "フラッシュアッパー", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "目標x5 夢x1", "videoUrl": "" },
  { "name": "薪割りチョップ", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 60, "at": 60, "get": "秘宝堂", "material": "熱血x1 目標x5", "videoUrl": "" },
  { "name": "P コロッセオガード", "type": "キーパー", "subType": "パンチ", "attr": "山", "tension": 60, "at": 60, "get": "特訓ショップ", "material": "友情x3 夢x3", "videoUrl": "" },
  { "name": "P ちゃぶ台返し", "type": "キーパー", "subType": "パンチ", "attr": "山", "tension": 60, "at": 60, "get": "秘宝堂", "material": "友情x4 感謝x4", "videoUrl": "" },
  { "name": "P フェンス・オブ・ガイア", "type": "キーパー", "subType": "パンチ", "attr": "山", "tension": 60, "at": 60, "get": "VSストア", "material": "激のコインx12 滅のコインx9", "videoUrl": "" },
  { "name": "P ぶっとびパンチ", "type": "キーパー", "subType": "パンチ", "attr": "山", "tension": 60, "at": 60, "get": "VSストア", "material": "裂のコインx9 滅のコインx12", "videoUrl": "" },
  // --- テンション 70、AT60 ---
  // 風属性
  { "name": "P スターリフレクション", "type": "キーパー", "subType": "パンチ", "attr": "風", "tension": 70, "at": 60, "get": "VSストア", "material": "激のコインx9 滅のコインx6", "videoUrl": "" },
  // --- テンション 70 ---
  // 風属性
  { "name": "キラーエルボー", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx12 滅のコインx9", "videoUrl": "" },
  { "name": "キルブリッジ", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 70, "at": 70, "get": "秘宝堂", "material": "感謝x7 夢x4", "videoUrl": "" },
  { "name": "プロキオンネット", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x32 円堂伝説の軌跡x28", "videoUrl": "" },
  { "name": "P 正義の鉄拳", "type": "キーパー", "subType": "パンチ", "attr": "風", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x12 練習はおにぎりx38", "videoUrl": "" },
  { "name": "P つなみウォール", "type": "キーパー", "subType": "パンチ", "attr": "風", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "円堂伝説の軌跡x16 秋のマネージャー日記ページx24", "videoUrl": "" },
  // 林属性
  { "name": "アウターワールド", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "熱血x1 夢x3", "videoUrl": "" },
  { "name": "グラビティポイント", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 70, "at": 70, "get": "秘宝堂", "material": "友情x5 目標x5", "videoUrl": "" },
  { "name": "ワームホール", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x18 影の計画書ページx38", "videoUrl": "" },
  { "name": "P イジゲン・ザ・ハンド", "type": "キーパー", "subType": "パンチ", "attr": "林", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "心うつ格言x34 影の計画書ページx36", "videoUrl": "" },
  // 火属性
  { "name": "サンドカッター", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 70, "at": 70, "get": "秘宝堂", "material": "友情x3 目標x5", "videoUrl": "" },
  { "name": "ドライ・ブロー", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx9 裂のコインx12", "videoUrl": "" },
  { "name": "無頼ハンド", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx12 滅のコインx9", "videoUrl": "" },
  { "name": "P ダブルロケット", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 70, "at": 70, "get": "秘宝堂", "material": "元気x3 目標x5", "videoUrl": "" },
  { "name": "P ミリオンハンズ", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 70, "at": 70, "get": "秘宝堂", "material": "熱血x2 友情x9", "videoUrl": "" },
  { "name": "P ビームこぶし", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 70, "at": 70, "get": "秘宝堂", "material": "熱血x3 元気x5", "videoUrl": "" },
  { "name": "P フルパワーシールド", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "友情x3 元気x2", "videoUrl": "" },
  // 山属性
  { "name": "怒りの鉄槌", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 70, "at": 70, "get": "クロニクル百貨店", "material": "影の計画書ページx16 星空の下x16", "videoUrl": "" },
  { "name": "ギガントウォール", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx9 裂のコインx9", "videoUrl": "" },
  { "name": "サーペントファング", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 70, "at": 70, "get": "特訓ショップ", "material": "友情x3 目標x3", "videoUrl": "" },
  { "name": "トリプルディフェンス", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx12 滅のコインx9", "videoUrl": "" },
  // 無属性
  { "name": "ペンギン・ザ・ハンド", "type": "キーパー", "subType": "キャッチ", "attr": "無", "tension": 70, "at": 70, "get": "VSストア", "material": "激のコインx9 滅のコインx12", "videoUrl": "" },
  { "name": "リジェクション", "type": "キーパー", "subType": "キャッチ", "attr": "無", "tension": 70, "at": 70, "get": "", "material": "", "videoUrl": "" },
  { "name": "P 弧月十字掌", "type": "キーパー", "subType": "パンチ", "attr": "無", "tension": 70, "at": 70, "get": "秘宝堂", "material": "友情x5 夢x1", "videoUrl": "" },
  // --- テンション 80 ---
  // 風属性
  { "name": "ホーリーゾーン", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 80, "at": 85, "get": "VSストア", "material": "激のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  { "name": "P アクアブレス", "type": "キーパー", "subType": "パンチ", "attr": "風", "tension": 80, "at": 85, "get": "VSストア", "material": "滅のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  { "name": "P 時空の壁", "type": "キーパー", "subType": "パンチ", "attr": "風", "tension": 80, "at": 85, "get": "スピリット交換所", "material": "ネロLv50↑ ネロx4", "videoUrl": "" },
  { "name": "P ライジングスラッシュ", "type": "キーパー", "subType": "パンチ", "attr": "風", "tension": 80, "at": 85, "get": "VSストア", "material": "裂のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  // 林属性
  { "name": "ジ・エンド", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 80, "at": 85, "get": "VSストア", "material": "裂のコインx15 ヴィクトリーストーンx60", "videoUrl": "" },
  { "name": "ビッグマウス", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 80, "at": 85, "get": "VSストア", "material": "激のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  { "name": "分身ブロック", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx10 練習はおにぎりx38", "videoUrl": "" },
  { "name": "マジン・ザ・ハンド", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "練習はおにぎりx14 秋のマネージャー日記ページx30", "videoUrl": "" },
  { "name": "ムゲン・ザ・ハンド", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "心うつ格言x16 星空の下でx36", "videoUrl": "" },
  // 火属性
  { "name": "ゴッドハンドX", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 80, "at": 85, "get": "VSストア", "material": "裂のコインx15 ヴィクトリーストーンx60", "videoUrl": "" },
  { "name": "ビーストファング", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 80, "at": 85, "get": "秘宝堂", "material": "熱血x5 夢x7", "videoUrl": "" },
  { "name": "P エンパイアシールド", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 80, "at": 85, "get": "特訓ショップ", "material": "熱血x2 目標x2", "videoUrl": "" },
  { "name": "P ドリルスマッシャー", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 80, "at": 85, "get": "VSストア", "material": "裂のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  { "name": "P ボルケイノヘッド", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx14 秋のマネージャー日記ページx32", "videoUrl": "" },
  // 山属性
  { "name": "ゴッドハンドV", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "影の計画書ページx16 秋のマネージャー日記ページx12", "videoUrl": "" },
  { "name": "ゴッドハンドW", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 80, "at": 85, "get": "VSストア", "material": "滅のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  { "name": "ゴッドハンド・タイガー", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 80, "at": 85, "get": "特訓ショップ", "material": "熱血x2 友情x3", "videoUrl": "" },
  { "name": "大国謳歌", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 80, "at": 85, "get": "", "material": "", "videoUrl": "" },
  { "name": "無限の壁", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "心うつ格言x32 秋のマネージャー日記ページx28", "videoUrl": "" },
  { "name": "マジン・ザ・ハンド", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 80, "at": 85, "get": "クロニクル百貨店", "material": "練習はおにぎりx24 秋のマネージャー日記ページx30", "videoUrl": "" },
  { "name": "P サンドノック", "type": "キーパー", "subType": "パンチ", "attr": "山", "tension": 80, "at": 85, "get": "VSストア", "material": "裂のコインx18 ヴィクトリーストーンx60", "videoUrl": "" },
  // --- テンション 100 ---
  // 風属性
  { "name": "ゲキリンダンク", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx20 円堂伝説の軌跡x24", "videoUrl": "" },
  { "name": "ゴッドフィンガーズ", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 100, "at": 100, "get": "特訓ショップ", "material": "友情x4 元気x4", "videoUrl": "" },
  { "name": "シャイニングホール", "type": "キーパー", "subType": "キャッチ", "attr": "風", "tension": 100, "at": 100, "get": "VSストア", "material": "滅のコインx27 ヴィクトリーストーンx75", "videoUrl": "" },
  { "name": "P サクリファイス", "type": "キーパー", "subType": "パンチ", "attr": "風", "tension": 100, "at": 100, "get": "VSストア", "material": "激のコインx27 ヴィクトリーストーンx75", "videoUrl": "" },
  { "name": "P ハイボルテージ", "type": "キーパー", "subType": "パンチ", "attr": "風", "tension": 100, "at": 100, "get": "ヴィクトリーボックス", "material": "", "videoUrl": "" },
  // 林属性
  { "name": "ディスティニークラウド", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx18 円堂伝説の軌跡x28", "videoUrl": "" },
  { "name": "魔王・ザ・ハンド", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "立向居(無印)Lv50↑ 立向居(無印)x4 ゴッドハンド草x2", "videoUrl": "" },
  { "name": "女神大陸", "type": "キーパー", "subType": "キャッチ", "attr": "林", "tension": 100, "at": 100, "get": "特訓ショップ", "material": "感謝x3 夢x2", "videoUrl": "" },
  { "name": "P 銀河ロケット", "type": "キーパー", "subType": "パンチ", "attr": "林", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "信助x1", "videoUrl": "" },
  { "name": "P リバウンドレイヤー", "type": "キーパー", "subType": "パンチ", "attr": "林", "tension": 100, "at": 100, "get": "クロニクル百貨店", "material": "じいちゃんのスゴ技特訓ノートページx24 心うつ格言x20", "videoUrl": "" },
  // 火属性
  { "name": "タマシイ・ザ・ハンド", "type": "キーパー", "subType": "キャッチ", "attr": "火", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "ロココLv50↑ ロココx4 イナズマの花x2", "videoUrl": "" },
  { "name": "P キャッスルゲート", "type": "キーパー", "subType": "パンチ", "attr": "火", "tension": 100, "at": 100, "get": "VSストア", "material": "裂のコインx27 ヴィクトリーストーンx75", "videoUrl": "" },
  // 山属性
  { "name": "オメガ・ザ・ハンド", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 100, "at": 100, "get": "ヴィクトリーボックス", "material": "", "videoUrl": "" },
  { "name": "ゴッドキャッチ", "type": "キーパー", "subType": "キャッチ", "attr": "山", "tension": 100, "at": 100, "get": "スピリット交換所", "material": "円堂(無印)Lv50↑ ザゴメルx4 ゴッドハンド草x2", "videoUrl": "" }
];
