var names=new Array();
names[0]="Nikhilesh";
names[1]="Sri";
names[2]="Satish";
names[3]="Vardhan";
names[4]="Lasya";
names[5]="Sid";
names[6]="Sam";
names[7]="Sus";
names[8]="Suj";
names[9]="tan";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}