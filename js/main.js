
$(function(){

	const infos =[

		// data index 0
		{preview:'	<iframe width="560" height="315" src="https://www.youtube.com/embed/Y5ws8WmAX7A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2020.11.03',eventname:'BOFXVI',circle:'TEAM : BREWERS',subtitle:'',title:'afternoon',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'BGA',item02_1:'：fisH',item03:'Vocal',item03_1:'：倉先 /kurasaki',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'http://manbow.nothing.sh/event/event.cgi?action=More_def&num=420&event=133'},

		// data index 1
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912175930&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2020.10.25',eventname:'秋M3',circle:'STRLabel 新譜「BREWERS」',subtitle:'Track1',title:'afternoon',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'※0:00〜0:59',url:'http://str3.org/brewers/'},

		// data index 2
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/910304233&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2020.10.25',eventname:'秋M3',circle:'Loquartz 新譜「STYLEY NiGHT」',subtitle:'Track3',title:'アクアリウム feat.倉先',artist:'Kenichi Chiba',item01:'Music',item01_1:'：Kenichi Chiba',item02:'LYRICS',item02_1:'：水崎うき',item03:'Vocal',item03_1:'：倉先 /kurasaki',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'https://night.loquartz.com/'},

		// data index 3
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/876233788&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2020.08.15',eventname:'',circle:'Diverse System 新譜「AD:HOUSE8」',subtitle:'Disc1-Track9',title:'Slowly',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'http://adh8.diverse.jp/'},

		// data index 4
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/c7-H3YKpOVY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2020.07',eventname:'cover',circle:'',subtitle:'',title:'ディスコの神様 feat.藤井隆(ag Remix)',artist:'cover by倉先',item01:'Music/LYRICS',item01_1:'：tofubeats',item02:'Original Vocal',item02_1:'：藤井隆',item03:'Mix',item03_1:'：ag',item04:'Vocal',item04_1:'：倉先 /kurasaki',item05:'',item05_1:'',small:'',url:'https://www.youtube.com/channel/UCAMAwKWoMOBa0h97nQc_mcQ'},

		// data index 5
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/btL2Vk75fss" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2020.06',eventname:'Free DL',circle:'',subtitle:'',title:'Plain',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'https://soundcloud.com/agr1920/plain'},

		// data index 6
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/9NU74DIoYN8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2020.03',eventname:'Free DL',circle:'',subtitle:'',title:'White',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'https://soundcloud.com/agr1920/white'},

		// data index 7
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/1D-ZZbOxG24?start=97" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2020.03',eventname:'春M3',circle:'ZPPTRAX 新譜「partial recall」',subtitle:'Track3',title:'Party!! Party!! Party!!',artist:'good-cool feat.倉先',item01:'Music',item01_1:'：good-cool',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'※1:37〜2:25',url:'https://zpptrax-pr.tumblr.com/'},

		// data index 8
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/761399878&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2020.03',eventname:'春M3',circle:'STRLabel 新譜「わくわくコンピ！」',subtitle:'Track1',title:'looking back',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'1:37〜2:25',url:'http://str3.org/wakuwaku/'},

		// data index 9
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/733783237&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2019.12.31',eventname:'冬コミ',circle:'Loquartz 新譜「STYLEY! vol.4」',subtitle:'Track2',title:'Girlfriend feat. 倉先',artist:'Shion Hinano',item01:'Music',item01_1:'：Shion Hinano',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'https://styley4.loquartz.com/'},

		// data index 10
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/730303708&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2019.12.31',eventname:'冬コミ',circle:'Kenichi Chiba | northtakt 新譜「CROSSPOINT」',subtitle:'Track8',title:'Midnight Sherry Feat.倉先',artist:'Kenichi Chiba',item01:'Music',item01_1:'：Chiba',item02:'LYRICS',item02_1:'：水崎うき',item03:'Vocal',item03_1:'：倉先 /kurasaki',item04:'',item04_1:'',item05:'',item05_1:'',small:'※3:48〜4:48',url:'https://northtakt-crosspoint.tumblr.com/'},

		// data index 11
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/697824346&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2019.10.27',eventname:'秋M3',circle:'ミズノヨウ 新譜「真夏の太陽ep」',subtitle:'Track1',title:'真夏の太陽 feat.倉先',artist:'ミズノヨウ/mizunoyoh',item01:'Music',item01_1:'：ミズノヨウ/mizunoyoh',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item05:'',item05_1:'',item04_1:'',small:'',url:'https://twitter.com/mizunoyoh'},

		// data index 12
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/660456668&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2019.08.12',eventname:'夏コミ',circle:'Loquartz 新譜「STYLEY! vol.3」',subtitle:'Track2',title:'ダメって言えないの (feat.倉先)',artist:'Shion Hinano',item01:'Music',item01_1:'：Shion Hinano',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item05:'',item05_1:'',item04_1:'',small:'※0:48〜1:34',url:'styley3.loquartz.com'},

		// data index 13
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/659524820&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2019.08.12',eventname:'夏コミ',circle:'Diverse System 新譜「AD:HOUSE7」',subtitle:'Disc1-Track2',title:'Float',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'※0:48〜1:34',url:'adh7.diverse.jp'},

		// data index 14
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/TSzJ0JFj-tA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2019.07',eventname:'cover',circle:'',subtitle:'',title:'ROUTE 23',artist:'cover by倉先',item01:'Music',item01_1:'：パトリチェフ',item02:'Original Vocal',item02_1:'：鏡音リン',item03:'Mix',item03_1:'：むつえもん',item04:'Vocal',item04_1:'：倉先 /kurasaki',item05:'',item05_1:'',small:'',url:'https://youtu.be/ix9TZoc5Nao'},

		// data index 15
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/DIm7wDn80kQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2019.06',eventname:'cover',circle:'',subtitle:'',title:'6900000000',artist:'cover by倉先',item01:'Music',item01_1:'：kyotn',item02:'LYRICS',item02_1:'：HAMO',item03:'Original Vocal',item03_1:'：初音ミク',item04:'Mix',item04_1:'：うまい棒じじい',item05:'Vocal',item05_1:'：倉先 /kurasaki',small:'',url:'https://www.nicovideo.jp/watch/sm13380008'},

		// data index 16
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/917OglIN6h0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2019.06',eventname:'',circle:'',subtitle:'',title:'不器用な真実 feat.倉先',artist:'カニカンズ',item01:'Music',item01_1:'：MICHIHIKO SATO',item02:'WORDS',item02_1:'：MICHIHIKO SATO',item03:'Vocal',item03_1:'：倉先 /kurasaki',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'https://twitter.com/kanicans'},

		// data index 17
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/kfxdNaYeclA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2019.05',eventname:'cover',circle:'',subtitle:'',title:'花火(ag Remix)',artist:'cover by倉先',item01:'Music',item01_1:'：aiko',item02:'LYRICS',item02_1:'：aiko',item03:'Original Vocal',item03_1:'：aiko',item04:'Mix',item04_1:'：ag',item05:'Vocal',item05_1:'：倉先 /kurasaki',small:'',url:'https://soundcloud.com/k_saky/hanabi_agremix'},

		// data index 18
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/607336176&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2019.04.28',eventname:'春M3',circle:'STRLabel 新譜「PRISM」',subtitle:'Track5',title:'Sigh',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'http://str3.org/prism/'},

		// data index 19
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/-0gai5A7dAQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2019.02',eventname:'音楽ゲーム公募',circle:'',subtitle:'',title:'all night',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'https://soundcloud.com/agr1920/allnight'},

		// data index 20
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/r-zLdL6Xgo4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2019.02',eventname:'cover',circle:'',subtitle:'',title:'恋はみずいろ(ClothedMusic Soul Mix)',artist:'cover by倉先',item01:'TVアニメ',item01_1:'「アマガミSS」',item02:'ARTIST',item02_1:'：七咲逢 (cv ゆかな)',item03:'MIX/Mastering',item03_1:'：Clothed Music',item04:'Vocal',item04_1:'：倉先 /kurasaki',item05:'',item05_1:'',small:'',url:'https://soundcloud.com/k_saky/lib_clothedmusicremix'},

		// data index 21
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/587796195&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2018.12.30',eventname:'冬コミ',circle:'G-C VIBES 新譜「good-cool fabulous housekeeper」',subtitle:'Track11',title:'Baby Maybe',artist:'good-cool',item01:'Music',item01_1:'：good-cool',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'https://twitter.com/goood_coool'},

		// data index 22
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547635252&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2018.12.30',eventname:'冬コミ',circle:'Yamajet | double caret 新譜「ホムパリピ！」',subtitle:'Track7',title:'Whenever will be (Yamajet Remix)',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'https://homuparipi.tumblr.com/'},

		// data index 23
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/544282317&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2018.12.30',eventname:'冬コミ',circle:'Yamajet | double caret 新譜「ホムパリピ！」',subtitle:'Track2',title:'Whenever will be',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'https://homuparipi.tumblr.com/'},

		// data index 24
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/PWQlJNt9XK4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2018.11',eventname:'cover',circle:'',subtitle:'',title:'太陽の接吻(ag Remix)',artist:'cover by倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'https://soundcloud.com/k_saky/withthekissofsun_agremix'},

		// data index 25
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/517811394&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2018.12.30',eventname:'秋M3',circle:'Loquartz 新譜「STYLEY! vol.2」',subtitle:'Track2',title:'All Night (feat.倉先)',artist:'Shion Hinano',item01:'Music',item01_1:'：Shion Hinano',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'http://loquartz.com/release/lqaz0005/'},

		// data index 26
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/scSsfcedWkw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2018.08',eventname:'cover',circle:'',subtitle:'',title:'ナーヴ・インパルス',artist:'cover by倉先',item01:'Music',item01_1:'：ポリスピカデリー',item02:'Original Vocal',item02_1:'：闇音レンリ',item03:'Mix',item03_1:'：でいもん',item04:'Vocal',item04_1:'：倉先 /kurasaki',item05:'',item05_1:'',small:'',url:'https://youtu.be/v6GIH5VIQbo'},

		// data index 27
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480593043&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2018.08.10',eventname:'夏コミ',circle:'Diverse System 新譜「Colors -AD:HOUSE VOCAL REMIXES-」',subtitle:'Track7',title:'Shine (Scarfaith Remix)',artist:'ag feat. 倉先 remixed by Scarfaith',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'http://colors.diverse.jp/'},

		// data index 28
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/479661543&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2018.08.10',eventname:'夏コミ',circle:'Diverse System 新譜「Clearly - AD:HOUSE BEST -」',subtitle:'Disc1-Track2',title:'Count on you',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'http://clearly.diverse.jp/'},

		// data index 29
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/434417727&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2018.04.29',eventname:'春M3',circle:'Loquartz 新譜「STYLEY! 」',subtitle:'Track3',title:'Cutely Girlish Weekend (feat.倉先)',artist:'Shion Hinano',item01:'Music',item01_1:'：Shion Hinano',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'https://loquartz.com/release/lqaz0003/'},

		// data index 30
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/_dHAj_k6cjM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2018.02',eventname:'cover',circle:'',subtitle:'',title:'エンゼルフィッシュ',artist:'cover by倉先',item01:'MUSIC',item01_1:'：パトリチェフ',item02:'Original Vocal',item02_1:'：鏡音リン',item03:'Mix',item03_1:'：倉先/kurasaki',item04:'Vocal',item04_1:'：倉先 /kurasaki',item05:'Special thanx!',item05_1:'：つよしん',small:'',url:'http://www.nicovideo.jp/watch/sm21436114'},

		// data index 31
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Xjf48VjYp-A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2017.12',eventname:'cover',circle:'',subtitle:'',title:'エンゼルフィッシュ(ag Remix)',artist:'cover by倉先/kurasaki',item01:'Music',item01_1:'：パトリチェフ',item02:'Original Vocal',item02_1:'：EVO+',item03:'Mix',item03_1:'：ag',item04:'Vocal',item04_1:'：倉先 /kurasaki',item05:'',item05_1:'',small:'',url:'evolution.extsm.com/'},

		// data index 32
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/346076417&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2017.10',eventname:'Free DL',circle:'',subtitle:'',title:'Forever and Ever',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'http://nico.ms/sm32078752'},

		// data index 33
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/vmgyJ8im9rA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2017.08',eventname:'cover',circle:'',subtitle:'',title:'妄想感傷代償連盟',artist:'cover by倉先',item01:'Music',item01_1:'：DECO*27',item02:'Original Vocal',item02_1:'：初音ミク',item03:'Mix',item03_1:'：Enigma',item04:'Vocal',item04_1:'：倉先 /kurasaki',item05:'',item05_1:'',small:'',url:'http://www.nicovideo.jp/watch/sm30067009'},

		// data index 34
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/336709943&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2017.08.11',eventname:'夏コミ',circle:'Diverse System 新譜「AD:HOUSE 6」',subtitle:'Disc1-Track4',title:'Shine',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'http://adh6.diverse.jp/'},

		// data index 35
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319079437&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2017.04.30',eventname:'春M3',circle:'Lick Dom Records & Neutrinique 新譜「Honey Cheeks 2 -Purple Dress- 」',subtitle:'Track2',title:'One Day',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'http://c-show.jp/RGLD-002/'},

		// data index 36
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/286689579&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2016.10.30',eventname:'秋M3',circle:'Swingrooves 新譜「the next little step」',subtitle:'Track2',title:'brand new world',artist:'ag feat.倉先',item01:'Words',item01_1:'：ag',item02:'composed',item02_1:'：ag',item03:'Programming',item03_1:'：Clothed Music',item04:'arrange/Mix',item04_1:'：Clothed Music',item05:'Vocal',item05_1:'：倉先 /kurasaki',small:'※0:29〜1:04',url:'http://swingrooves.com/thenextlittlestep'},

		// data index 37
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276797296&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2016.08.14',eventname:'夏コミ',circle:'Diverse System 新譜「AD:HOUSE 5」',subtitle:'Disc1-Track3',title:'Starlight',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'http://adh5.diverse.jp'},

		// data index 38
		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/XhVChRVzUaY?start=89" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2016.04.24',eventname:'春M3',circle:'Swingrooves 新譜「The Beginning」',subtitle:'Disc2(ag Re:Define)-Track2',title:'I Can Be Myself feat.倉先',artist:'ag',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'http://swingrooves.com/thebeginning'},

		// data index 39
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/218352519&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2015.08.15',eventname:'夏コミ',circle:'Diverse System 新譜「AD:HOUSE 4」',subtitle:'Disc2-Track7',title:'Follow Me',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先 /kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',item05:'',item05_1:'',small:'',url:'http://adh4.diverse.jp/'},


	];

	



	$('.JS_Click_Trigger').on('click', function(){

		const titleArray = $(this).data('index');
			$('.wrapper .youtube').html(infos[titleArray].preview);
			$('.wrapper .movtext .date').text(infos[titleArray].date);
			$('.wrapper .movtext .eventname').text(infos[titleArray].eventname);
			$('.wrapper .movtext .circle').text(infos[titleArray].circle);
			$('.wrapper .movtext .subtitle').text(infos[titleArray].subtitle);
			$('.wrapper .movtext .title').text(infos[titleArray].title);
			$('.wrapper .movtext .artist').text(infos[titleArray].artist);
			$('.wrapper .movtext .item01').text(infos[titleArray].item01);
			$('.wrapper .movtext .item01_1').text(infos[titleArray].item01_1);
			$('.wrapper .movtext .item02').text(infos[titleArray].item02);
			$('.wrapper .movtext .item02_1').text(infos[titleArray].item02_1);
			$('.wrapper .movtext .item03').text(infos[titleArray].item03);
			$('.wrapper .movtext .item03_1').text(infos[titleArray].item03_1);
			$('.wrapper .movtext .item04').text(infos[titleArray].item04);
			$('.wrapper .movtext .item04_1').text(infos[titleArray].item04_1);
			$('.wrapper .movtext .item05').text(infos[titleArray].item05);
			$('.wrapper .movtext .item05_1').text(infos[titleArray].item05_1);
			$('.wrapper .mov .small').text(infos[titleArray].small);
			$('.wrapper .movtext .button').attr("href",infos[titleArray].url);

			$('.OverLayer').addClass('isShow');
			$('body').css({overflow: 'hidden'});
	});

	$('.OverLayer-Mask').on('click', function(){
		$('.OverLayer').removeClass('isShow');
		
		$('body').css({overflow: ''});
	});
		


});




