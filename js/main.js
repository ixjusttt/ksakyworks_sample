$(function(){

      $('.JS_click_Trigger').on('click',function(){

        // 情報
        const infos =[

          // data-index=[0]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Y5ws8WmAX7A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2020.11.03', ifs_event:'BOFXVI', ifs_album:'TEAM:BREWERS', ifs_track:'', ifs_title:'afternoon', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'BGA',ifs_colon02:'：', ifs_sb02_d:'fisH', ifs_sb03:'Vocal', ifs_colon03:'：', ifs_sb03_d:'倉先/kurasaki', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://manbow.nothing.sh/event/event.cgi?action=More_def&num=420&event=133'},

          // data-index=[1]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912175930&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'※0:00〜0:59', ifs_date:'2020.10.25', ifs_event:'秋M3', ifs_album:'STRLabel 新譜「BREWERS」', ifs_track:'Track1', ifs_title:'afternoon', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://str3.org/brewers/'},

          // data-index=[2]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/910304233&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'※2:05〜3:05', ifs_date:'2020.10.25', ifs_event:'秋M3', ifs_album:'Loquartz 新譜「STYLEY NiGHT」', ifs_track:'Track3', ifs_title:'アクアリウム feat.倉先', ifs_artist:'Kenichi Chiba', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'Kenichi Chiba', ifs_sb02:'Lyrics',ifs_colon02:'：', ifs_sb02_d:'水崎うき', ifs_sb03:'Vocal', ifs_colon03:'：', ifs_sb03_d:'倉先/kurasaki', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://night.loquartz.com/'},

          // data-index=[3]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/876233788&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'※2:05〜3:05', ifs_date:'2020.08.15', ifs_event:'秋M3', ifs_album:'Diverse System 新譜「AD:HOUSE8」', ifs_track:'Disc1-Track9', ifs_title:'Slowly', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://adh8.diverse.jp/'},

          // data-index=[4]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/c7-H3YKpOVY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2020.07', ifs_event:'cover', ifs_album:'', ifs_track:'', ifs_title:'ディスコの神様 feat.藤井隆(ag Remix)', ifs_artist:'cover by倉先', ifs_sb01:'Music/Lyrics', ifs_colon01:'：', ifs_sb01_d:'tofubeats', ifs_sb02:'Original Vocal',ifs_colon02:'：', ifs_sb02_d:'藤井隆', ifs_sb03:'Mix', ifs_colon03:'：', ifs_sb03_d:'ag', ifs_sb04:'Vocal', ifs_colon04:'：', ifs_sb04_d:'倉先/kurasaki', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://soundcloud.com/k_saky/discogod_agremix'},

          // data-index=[5]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/btL2Vk75fss" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2020.06', ifs_event:'Free DL', ifs_album:'', ifs_track:'', ifs_title:'Plain', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://soundcloud.com/agr1920/plain'},

          // data-index=[6]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/9NU74DIoYN8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2020.03', ifs_event:'Free DL', ifs_album:'', ifs_track:'', ifs_title:'White', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://soundcloud.com/agr1920/white'},

          // data-index=[7]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/1D-ZZbOxG24" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'※1:37〜2:25', ifs_date:'2020.03', ifs_event:'春M3', ifs_album:'ZPPTRAX 新譜「partial recall」', ifs_track:'Track3', ifs_title:'Party!! Party!! Party!!', ifs_artist:'good-cool feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'Tatsuya Furukawa', ifs_sb02:'Lyrics',ifs_colon02:'：', ifs_sb02_d:'good-cool', ifs_sb03:'Vocal', ifs_colon03:'：', ifs_sb03_d:'倉先/kurasaki', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://zpptrax-pr.tumblr.com/'},

          // data-index=[8]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/761399878&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2020.03', ifs_event:'春M3', ifs_album:'STRLabel 新譜「わくわくコンピ！」', ifs_track:'Track1', ifs_title:'looking back', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://str3.org/wakuwaku/'},

          // data-index=[9]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/733783237&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2019.12.31', ifs_event:'冬コミ', ifs_album:'Loquartz 新譜「STYLEY! vol.4」', ifs_track:'Track2', ifs_title:'Girlfriend feat. 倉先', ifs_artist:'Shion Hinano', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'Shion Hinano', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://styley4.loquartz.com/'},

          // data-index=[10]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/730303708&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'※3:48〜4:48', ifs_date:'2019.12.31', ifs_event:'冬コミ', ifs_album:'Kenichi Chiba | northtakt 新譜「CROSSPOINT」', ifs_track:'Track8', ifs_title:'Midnight Sherry Feat.倉先', ifs_artist:'Kenichi Chiba', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'Kenichi Chiba', ifs_sb02:'Lyrics',ifs_colon02:'：', ifs_sb02_d:'水崎うき', ifs_sb03:'Vocal', ifs_colon03:'：', ifs_sb03_d:'倉先/kurasaki', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://northtakt-crosspoint.tumblr.com/'},

          // data-index=[11]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/697824346&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2019.10.27', ifs_event:'秋M3', ifs_album:'ミズノヨウ 新譜「真夏の太陽ep」', ifs_track:'Track1', ifs_title:'真夏の太陽 feat.倉先', ifs_artist:'ミズノヨウ/mizunoyoh', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ミズノヨウ/mizunoyoh', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://twitter.com/mizunoyoh'},

          // data-index=[12]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/660456668&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'※0:48〜1:34', ifs_date:'2019.08.12', ifs_event:'夏コミ', ifs_album:'Loquartz 新譜「STYLEY! vol.3」', ifs_track:'Track2', ifs_title:'ダメって言えないの (feat.倉先)', ifs_artist:'Shion Hinano', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'Shion Hinano', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'styley3.loquartz.com'},

          // data-index=[13]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/659524820&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2019.08.12', ifs_event:'夏コミ', ifs_album:'Diverse System 新譜「AD:HOUSE7」', ifs_track:'Disc1-Track2', ifs_title:'Float', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'adh7.diverse.jp'},

          // data-index=[14]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/TSzJ0JFj-tA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2019.07', ifs_event:'cover', ifs_album:'', ifs_track:'', ifs_title:'ROUTE 23', ifs_artist:'cover by倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'パトリチェフ', ifs_sb02:'Original Vocal',ifs_colon02:'：', ifs_sb02_d:'鏡音リン', ifs_sb03:'Mix', ifs_colon03:'：', ifs_sb03_d:'むつえもん', ifs_sb04:'Vocal', ifs_colon04:'：', ifs_sb04_d:'倉先/kurasaki', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://youtu.be/ix9TZoc5Nao'},

          // data-index=[15]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/DIm7wDn80kQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2019.06', ifs_event:'cover', ifs_album:'', ifs_track:'', ifs_title:'6900000000', ifs_artist:'cover by倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'kyotn', ifs_sb02:'Lyrics',ifs_colon02:'：', ifs_sb02_d:'HAMO', ifs_sb03:'Original Vocal', ifs_colon03:'：', ifs_sb03_d:'初音ミク', ifs_sb04:'Mix', ifs_colon04:'：', ifs_sb04_d:'うまい棒じじい', ifs_sb05:'Vocal', ifs_colon05:'：', ifs_sb05_d:'倉先/kurasaki',ifs_url:'https://www.nicovideo.jp/watch/sm13380008'},

          // data-index=[16]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/917OglIN6h0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2019.06', ifs_event:'', ifs_album:'', ifs_track:'', ifs_title:'不器用な真実 feat.倉先', ifs_artist:'カニカンズ', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'MICHIHIKO SATO', ifs_sb02:'Words',ifs_colon02:'：', ifs_sb02_d:'MICHIHIKO SATO', ifs_sb03:'Vocal', ifs_colon03:'：', ifs_sb03_d:'倉先/kurasaki', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://twitter.com/kanicans'},

          // data-index=[17]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/kfxdNaYeclA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2019.05', ifs_event:'cover', ifs_album:'', ifs_track:'', ifs_title:'花火(ag Remix)', ifs_artist:'cover by倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'aiko', ifs_sb02:'Lyrics',ifs_colon02:'：', ifs_sb02_d:'aiko', ifs_sb03:'Original Vocal', ifs_colon03:'：', ifs_sb03_d:'aiko', ifs_sb04:'Mix', ifs_colon04:'：', ifs_sb04_d:'ag', ifs_sb05:'Vocal', ifs_colon05:'：', ifs_sb05_d:'倉先/kurasaki',ifs_url:'https://soundcloud.com/k_saky/hanabi_agremix'},

          // data-index=[18]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/607336176&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2019.04.28', ifs_event:'春M3', ifs_album:'STRLabel 新譜「PRISM」', ifs_track:'Track5', ifs_title:'Sigh', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:' ', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://str3.org/prism/'},

          // data-index=[19]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/-0gai5A7dAQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2019.02', ifs_event:'音楽ゲーム公募', ifs_album:'', ifs_track:'', ifs_title:'all night', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:' ', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://soundcloud.com/agr1920/allnight'},

          // data-index=[20]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/r-zLdL6Xgo4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2019.02', ifs_event:'cover', ifs_album:'', ifs_track:'', ifs_title:'恋はみずいろ(ClothedMusic Soul Mix)', ifs_artist:'cover by倉先', ifs_sb01:'TVアニメ', ifs_colon01:'：', ifs_sb01_d:'「アマガミSS」', ifs_sb02:'Artist',ifs_colon02:'：', ifs_sb02_d:'七咲逢 (cv ゆかな)', ifs_sb03:'Mix/Mastering', ifs_colon03:'：', ifs_sb03_d:'Clothed Music', ifs_sb04:'Vocal', ifs_colon04:'：', ifs_sb04_d:'倉先/kurasaki', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://soundcloud.com/k_saky/lib_clothedmusicremix'},

          // data-index=[21]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/587796195&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2018.12.30', ifs_event:'冬コミ', ifs_album:'G-C VIBES 新譜「good-cool fabulous housekeeper」', ifs_track:'Track11', ifs_title:'Baby Maybe', ifs_artist:'good-cool', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'good-cool', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://soundcloud.com/good-cool-174525140/fabulous-housekeeper'},

          // data-index=[22]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/544282317&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2018.12.30', ifs_event:'冬コミ', ifs_album:'Yamajet | double caret 新譜「ホムパリピ！」', ifs_track:'Track2', ifs_title:'Whenever will be', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://homuparipi.tumblr.com/'},

          // data-index=[23]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547635252&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2018.12.30', ifs_event:'冬コミ', ifs_album:'Yamajet | double caret 新譜「ホムパリピ！」', ifs_track:'Track7', ifs_title:'Whenever will be (Yamajet Remix)', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://homuparipi.tumblr.com/'},

          // data-index=[24]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/PWQlJNt9XK4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2018.11', ifs_event:'cover', ifs_album:'', ifs_track:'', ifs_title:'太陽の接吻(ag Remix)', ifs_artist:'cover by倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'paris match', ifs_sb02:'Original Vocal',ifs_colon02:'：', ifs_sb02_d:'paris match', ifs_sb03:'Mix', ifs_colon03:'：', ifs_sb03_d:'ag', ifs_sb04:'Vocal', ifs_colon04:'：', ifs_sb04_d:'倉先/kurasaki', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://soundcloud.com/k_saky/withthekissofsun_agremix'},

          // data-index=[25]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/517811394&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2018.10.28', ifs_event:'秋M3', ifs_album:'Loquartz 新譜「STYLEY! vol.2」', ifs_track:'Track2', ifs_title:'All Night (feat.倉先)', ifs_artist:'Shion Hinano', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'Shion Hinano', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://loquartz.com/release/lqaz0005/'},

          // data-index=[26]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/scSsfcedWkw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2018.08', ifs_event:'cover', ifs_album:'', ifs_track:'', ifs_title:'ナーヴ・インパルス', ifs_artist:'cover by倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ポリスピカデリー', ifs_sb02:'Original Vocal',ifs_colon02:'：', ifs_sb02_d:'闇音レンリ', ifs_sb03:'Mix', ifs_colon03:'：', ifs_sb03_d:'でいもん', ifs_sb04:'Vocal', ifs_colon04:'：', ifs_sb04_d:'倉先/kurasaki', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://youtu.be/v6GIH5VIQbo'},

          // data-index=[27]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480593043&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2018.08.10', ifs_event:'夏コミ', ifs_album:'Diverse System 新譜「Colors -AD:HOUSE VOCAL REMIXES-」', ifs_track:'Track7', ifs_title:'Shine (Scarfaith Remix)', ifs_artist:'ag feat. 倉先 remixed by Scarfaith', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://colors.diverse.jp/'},

          // data-index=[28]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/479661543&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2018.08.10', ifs_event:'夏コミ', ifs_album:'Diverse System 新譜「Clearly - AD:HOUSE BEST -」', ifs_track:'Disc1-Track2', ifs_title:'Count on you', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://clearly.diverse.jp/'},

          // data-index=[29]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/434417727&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2018.04.29', ifs_event:'春M3', ifs_album:'Loquartz 新譜「STYLEY! 」', ifs_track:'Track3', ifs_title:'Cutely Girlish Weekend (feat.倉先)', ifs_artist:'Shion Hinano', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'Shion Hinano', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'https://loquartz.com/release/lqaz0003/'},

          // data-index=[30]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/_dHAj_k6cjM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2018.02', ifs_event:'cover', ifs_album:'', ifs_track:'', ifs_title:'エンゼルフィッシュ', ifs_artist:'cover by倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'パトリチェフ', ifs_sb02:'Original Vocal',ifs_colon02:'：', ifs_sb02_d:'鏡音リン', ifs_sb03:'Mix/Vocal', ifs_colon03:'：', ifs_sb03_d:'倉先/kurasaki', ifs_sb04:'Special thanx!', ifs_colon04:'：', ifs_sb04_d:'つよしん', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://www.nicovideo.jp/watch/sm21436114'},

          // data-index=[31]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Xjf48VjYp-A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2017.12', ifs_event:'cover', ifs_album:'', ifs_track:'', ifs_title:'エンゼルフィッシュ(ag Remix)', ifs_artist:'cover by倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'パトリチェフ', ifs_sb02:'Original Vocal',ifs_colon02:'：', ifs_sb02_d:'EVO+', ifs_sb03:'Mix', ifs_colon03:'：', ifs_sb03_d:'ag', ifs_sb04:'Vocal', ifs_colon04:'：', ifs_sb04_d:'倉先/kurasaki', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'evolution.extsm.com/'},

          // data-index=[32]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/346076417&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2017.10', ifs_event:'Free DL', ifs_album:'', ifs_track:'', ifs_title:'Forever and Ever', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://nico.ms/sm32078752'},

          // data-index=[33]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/vmgyJ8im9rA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2017.08', ifs_event:'cover', ifs_album:'', ifs_track:'', ifs_title:'妄想感傷代償連盟', ifs_artist:'cover by倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'DECO*27', ifs_sb02:'Original Vocal',ifs_colon02:'：', ifs_sb02_d:'初音ミク', ifs_sb03:'Mix', ifs_colon03:'：', ifs_sb03_d:'Enigma', ifs_sb04:'Vocal', ifs_colon04:'：', ifs_sb04_d:'倉先/kurasaki', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://www.nicovideo.jp/watch/sm30067009'},

          // data-index=[34]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/336709943&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2017.08.11', ifs_event:'夏コミ', ifs_album:'Diverse System 新譜「AD:HOUSE 6」', ifs_track:'Disc1-Track4', ifs_title:'Shine', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://adh6.diverse.jp/'},

          // data-index=[35]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319079437&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2017.04.30', ifs_event:'春M3', ifs_album:'Lick Dom Records & Neutrinique 新譜「Honey Cheeks 2 -Purple Dress- 」', ifs_track:'Track2', ifs_title:'One Day', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://c-show.jp/RGLD-002/'},

          // data-index=[36]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/286689579&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'※0:29〜1:04', ifs_date:'2016.10.30', ifs_event:'秋M3', ifs_album:'Swingrooves 新譜「the next little step」', ifs_track:'Track2', ifs_title:'brand new world', ifs_artist:'ag feat.倉先', ifs_sb01:'Words/composed', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Programming',ifs_colon02:'：', ifs_sb02_d:'Clothed Music', ifs_sb03:'Arrange/Mix', ifs_colon03:'：', ifs_sb03_d:'Clothed Music', ifs_sb04:'Vocal', ifs_colon04:'：', ifs_sb04_d:'倉先/kurasaki', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://swingrooves.com/thenextlittlestep'},

          // data-index=[37]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276797296&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2016.08.14', ifs_event:'夏コミ', ifs_album:'Diverse System 新譜「AD:HOUSE 5」', ifs_track:'Disc1-Track3', ifs_title:'Starlight', ifs_artist:'ag feat.倉先', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://adh5.diverse.jp'},

          // data-index=[38]
          { ifs_prv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/XhVChRVzUaY?start=89" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', ifs_time:'', ifs_date:'2016.04.24', ifs_event:'春M3', ifs_album:'Swingrooves 新譜「The Beginning」', ifs_track:'Disc2(ag Re:Define)-Track2', ifs_title:'I Can Be Myself feat.倉先', ifs_artist:'ag', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://swingrooves.com/thebeginning'},

          // data-index=[39]
          { ifs_prv:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/218352519&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>', ifs_time:'', ifs_date:'2015.08.15', ifs_event:'夏コミ', ifs_album:'Diverse System 新譜「AD:HOUSE 4」', ifs_track:'Disc2-Track7', ifs_title:'Follow Me', ifs_artist:'ag', ifs_sb01:'Music', ifs_colon01:'：', ifs_sb01_d:'ag', ifs_sb02:'Vocal',ifs_colon02:'：', ifs_sb02_d:'倉先/kurasaki', ifs_sb03:'', ifs_colon03:'', ifs_sb03_d:'', ifs_sb04:'', ifs_colon04:'', ifs_sb04_d:'', ifs_sb05:'', ifs_colon05:'', ifs_sb05_d:'',ifs_url:'http://adh4.diverse.jp/'},

        ];




        
        const li_idx = $(this).data('index');
        $('.overlayer .ifs_prv').html(infos[li_idx].ifs_prv);
        $('.overlayer .ifs_time').text(infos[li_idx].ifs_time);
        $('.overlayer .ifs_date').text(infos[li_idx].ifs_date);
        $('.overlayer .ifs_event').text(infos[li_idx].ifs_event);
        $('.overlayer .ifs_album').text(infos[li_idx].ifs_album);
        $('.overlayer .ifs_track').text(infos[li_idx].ifs_track);
        $('.overlayer .ifs_title').text(infos[li_idx].ifs_title);
        $('.overlayer .ifs_artist').text(infos[li_idx].ifs_artist);
        $('.overlayer .ifs_sb01').text(infos[li_idx].ifs_sb01);
        $('.overlayer .ifs_colon01').text(infos[li_idx].ifs_colon01);
        $('.overlayer .ifs_sb01_d').text(infos[li_idx].ifs_sb01_d);
        $('.overlayer .ifs_sb02').text(infos[li_idx].ifs_sb02);
        $('.overlayer .ifs_colon02').text(infos[li_idx].ifs_colon02);
        $('.overlayer .ifs_sb02_d').text(infos[li_idx].ifs_sb02_d);
        $('.overlayer .ifs_sb03').text(infos[li_idx].ifs_sb03);
        $('.overlayer .ifs_colon03').text(infos[li_idx].ifs_colon03);
        $('.overlayer .ifs_sb03_d').text(infos[li_idx].ifs_sb03_d);
        $('.overlayer .ifs_sb04').text(infos[li_idx].ifs_sb04);
        $('.overlayer .ifs_colon04').text(infos[li_idx].ifs_colon04);
        $('.overlayer .ifs_sb04_d').text(infos[li_idx].ifs_sb04_d);
        $('.overlayer .ifs_sb05').text(infos[li_idx].ifs_sb05);
        $('.overlayer .ifs_colon05').text(infos[li_idx].ifs_colon05);
        $('.overlayer .ifs_sb05_d').text(infos[li_idx].ifs_sb05_d);
        $('.overlayer .ifs_url').attr('href',infos[li_idx].ifs_url);





      });





      // オーバーレイ設定
      // -------------------------------------------
      // ■ 表示する
      $('.JS_click_Trigger').on('click', function(){
        $('.overlayer').addClass('isShow');
        $('body').css('overflow','hidden');
      });

      // ■ 隠す
      $('.ol-mask').on('click', function(){
        $('.overlayer').removeClass('isShow');
        $('body').css('overflow','');
      });



      // メニュースクロール設定
      // -------------------------------------------
      const adjust = -20;
      let D_pst =$('#Discography').offset().top +adjust;
      let W_pst =$('#Works').offset().top +adjust;
      let A_pst =$('#About').offset().top +adjust;

      // ■ TOPへゆっくり移動させる
      $('#page_top').on('click',function(){
        $('body,html').animate({
          scrollTop:0 },500);
      });

      // Discographyへゆっくり移動させる

      $('#dsc').on('click',function(){
        $('body,html').animate({scrollTop:D_pst},500);
      });

      // ■ Worksへゆっくり移動させる

      $('#wks').on('click',function(){
        $('body,html').animate({scrollTop:W_pst},500);
      });

      // ■ Aboutへゆっくり移動させる

      $('#abt').on('click',function(){
        $('body,html').animate({scrollTop:A_pst},500);
      });

            // リサイズされたときの処理
      // -------------------------------------------
      $(window).on('resize',function(){
        D_pst =$('#Discography').offset().top +adjust;
        W_pst =$('#Works').offset().top +adjust;
        A_pst =$('#About').offset().top +adjust;
      });

      // -------------------------------------------

});