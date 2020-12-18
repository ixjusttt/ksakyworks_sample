
$(function(){

	const infos =[
		{preview:'	<iframe width="560" height="315" src="https://www.youtube.com/embed/Y5ws8WmAX7A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2020.11.03',eventname:'BOFXVI',circle:'TEAM : BREWERS',subtitle:'',title:'afternoon',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'BGA',item02_1:'：fisH',item03:'Vocal',item03_1:'：倉先/kurasaki',item04:'',item04_1:'',small:'',url:'http://manbow.nothing.sh/event/event.cgi?action=More_def&num=420&event=133'},
		
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912175930&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2020.10.25',eventname:'秋M3',circle:'STRLabel 新譜「BREWERS」',subtitle:'Track1',title:'afternoon',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先/kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',small:'※0:00〜0:59',url:'http://str3.org/brewers/'},
		
		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/910304233&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2020.10.25',eventname:'秋M3',circle:'Loquartz 新譜「STYLEY NiGHT」',subtitle:'Track3',title:'アクアリウム feat.倉先',artist:'Kenichi Chiba',item01:'Music',item01_1:'：Kenichi Chiba',item02:'LYRICS',item02_1:'：水崎うき',item03:'Vocal',item03_1:'：倉先/kurasaki',item04:'',item04_1:'',small:'',url:'https://night.loquartz.com/'},

		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/876233788&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2020.08.15',eventname:'',circle:'Diverse System 新譜「AD:HOUSE8」',subtitle:'Disc1-Track9',title:'Slowly',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先/kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',small:'',url:'http://adh8.diverse.jp/'},

		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/c7-H3YKpOVY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2020.07',eventname:'cover',circle:'',subtitle:'',title:'ディスコの神様 feat.藤井隆(ag Remix)',artist:'cover by倉先',item01:'Music/LYRICS',item01_1:'：tofubeats',item02:'Original Vocal',item02_1:'：藤井隆',item03:'mix',item03_1:'：ag',item04:'Vocal',item04_1:'：倉先/kurasaki',small:'',url:'https://youtu.be/c7-H3YKpOVY'},

		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/btL2Vk75fss" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2020.06',eventname:'Free DL',circle:'',subtitle:'',title:'Plain',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先/kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',small:'',url:'https://soundcloud.com/agr1920/plain'},

		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/9NU74DIoYN8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2020.03',eventname:'Free DL',circle:'',subtitle:'',title:'White',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先/kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',small:'',url:'https://soundcloud.com/agr1920/white'},

		{preview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/1D-ZZbOxG24?start=97" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',date:'2020.03',eventname:'春M3',circle:'ZPPTRAX 新譜「partial recall」',subtitle:'Track3',title:'Party!! Party!! Party!!',artist:'good-cool feat. 倉先',item01:'Music',item01_1:'：good-cool',item02:'Vocal',item02_1:'：倉先/kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',small:'※1:37〜2:25',url:'https://zpptrax-pr.tumblr.com/'},

		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/761399878&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2020.03',eventname:'春M3',circle:'STRLabel 新譜「わくわくコンピ！」',subtitle:'Track1',title:'looking back',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先/kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',small:'1:37〜2:25',url:'http://str3.org/wakuwaku/'},

		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/733783237&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2019.12.31',eventname:'冬コミ',circle:'Loquartz 新譜「STYLEY! vol.4」',subtitle:'Track2',title:'Girlfriend feat. 倉先',artist:'Shion Hinano',item01:'Music',item01_1:'：Shion Hinano',item02:'Vocal',item02_1:'：倉先/kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',small:'',url:'https://styley4.loquartz.com/'},

		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/730303708&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2019.12.31',eventname:'冬コミ',circle:'Kenichi Chiba | northtakt 新譜「CROSSPOINT」',subtitle:'Track8',title:'Midnight Sherry Feat.倉先',artist:'Kenichi Chiba',item01:'Music',item01_1:'：Chiba',item02:'LYRICS',item02_1:'：水崎うき',item03:'Vocal',item03_1:'：倉先/kurasaki',item04:'',item04_1:'',small:'※3:48〜4:48',url:'https://northtakt-crosspoint.tumblr.com/'},

		{preview:'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/692761480&color=%2364544c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',date:'2019.10.27',eventname:'秋M3',circle:'ag feat.倉先',subtitle:'',title:'新譜「CIRCLE」',artist:'ag feat.倉先',item01:'Music',item01_1:'：ag',item02:'Vocal',item02_1:'：倉先/kurasaki',item03:'',item03_1:'',item04:'',item04_1:'',small:'',url:'http://agr1920.com/release/circle'},



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




