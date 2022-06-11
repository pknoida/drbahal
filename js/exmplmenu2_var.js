	var NoOffFirstLineMenus=10;			// Number of first level items
	var LowBgColor='#d71920';			// Background color when mouse is not over
	var LowSubBgColor='#d71920';			// Background color when mouse is not over on subs
	var HighBgColor='#111111';			// Background color when mouse is over
	var HighSubBgColor='#111111';			// Background color when mouse is over on subs
	var FontLowColor='#FFFFFF';			// Font color when mouse is not over
	var FontSubLowColor='#FFFFFF';			// Font color subs when mouse is not over
	var FontHighColor='#ffffff';			// Font color when mouse is over
	var FontSubHighColor='#FFFFFF';			// Font color subs when mouse is over
	var BorderColor='#f2f2f2';			// Border color
	var BorderSubColor='#E6E7E8';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="verdana,arial,comic sans ms,technical"	// Font family menu items
	var FontSize=8;				// Font size menu items
	var FontBold=0;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.1;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.1;			// vertical overlap child/ parent
	var StartTop=115;				// Menu offset x coordinate
	var StartLeft=15;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=5;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=1;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=100;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=0;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=1;			// menu tree checking on or off 1 or 0
	var ShowArrow=0;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['tri.gif',5,10,'tridown.gif',10,5,'trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("Home","","",0,17,70);


Menu2=new Array("Current Issue","","",12,17,110);

	Menu2_1=new Array("Titan","","",0,20,160);	
	Menu2_2=new Array("Enigma","","",0);
	Menu2_3=new Array("Terrace Tile","terrace_tile.htm","",0,20,160);
	Menu2_4=new Array("Others:","other.htm","",0);
	Menu2_5=new Array("Others:","other.htm","",0);
	Menu2_6=new Array("Others:","other.htm","",0);
	Menu2_7=new Array("Others:","other.htm","",0);
	Menu2_8=new Array("Others:","other.htm","",0);
	Menu2_9=new Array("Others:","other.htm","",0);
	Menu2_10=new Array("Others:","other.htm","",0);
	Menu2_11=new Array("Others:","other.htm","",0);
	Menu2_12=new Array("Others:","other.htm","",0);
	
		

Menu3=new Array("Sections","","",17,17,80);

	Menu3_1=new Array("New Business Opportunity","terrace_tile.htm","",0,20,160);
	Menu3_2=new Array("Digital Printing","terrace_tile.htm","",0,20,160);
	Menu3_3=new Array("Neon","terrace_tile.htm","",0,20,160);
	Menu3_4=new Array("Dimensional Sign","terrace_tile.htm","",0,20,160);
	Menu3_5=new Array("Channel Letter","terrace_tile.htm","",0,20,160);
	Menu3_6=new Array("LED/Lighting","terrace_tile.htm","",0,20,160);
	Menu3_7=new Array("Photo Feature","terrace_tile.htm","",0,20,160);
	Menu3_8=new Array("Outdoor","terrace_tile.htm","",0,20,160);
	Menu3_9=new Array("Vehicle Graphics","terrace_tile.htm","",0,20,160);
	Menu3_10=new Array("Corporate","terrace_tile.htm","",0,20,160);
	Menu3_11=new Array("Profiles","terrace_tile.htm","",0,20,160);
	Menu3_12=new Array("Medias","terrace_tile.htm","",0,20,160);
	Menu3_13=new Array("Glossary","terrace_tile.htm","",0,20,160);
	Menu3_14=new Array("Basics","terrace_tile.htm","",0,20,160);
	Menu3_15=new Array("POP","terrace_tile.htm","",0,20,160);
	Menu3_16=new Array("Education","terrace_tile.htm","",0,20,160);
	Menu3_17=new Array("Miscellaneous","terrace_tile.htm","",0,20,160);


Menu4=new Array("News","javascript:top.location.href=''","",0,17,80);
Menu5=new Array("Emagazine","","",6,17,100);
	Menu5_1=new Array("Indigo","Indigo.htm","",0,17,160);
	Menu5_2=new Array("Glide","Glide.htm","",0);
	Menu5_3=new Array("Glide","Glide.htm","",0);
	Menu5_4=new Array("Glide","Glide.htm","",0);
	Menu5_5=new Array("Glide","Glide.htm","",0);	
	Menu5_6=new Array("Glide","Glide.htm","",0);	

Menu6=new Array("Archive","javascript:top.location.href=''","",0,17,80);	

Menu7=new Array("Events","javascript:top.location.href=''","",0,17,80);	
Menu8=new Array("Newsletter","javascript:top.location.href=''","",0,17,100);
Menu9=new Array("Careers","javascript:top.location.href=''","",0,17,90);
Menu10=new Array("Contact Us","javascript:top.location.href=''","",0,17,90);
	