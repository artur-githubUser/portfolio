fonts:

	* the '_fonts.scss' file in the 'scss' file is created automatically when you run gulp in the console
	* when adding a new font file to <src/fonts> the '_fonts.scss' file must be deleted and gulp restarted

BABEL: 

	* runs separately from the console. The command is listed in the LAUNCH section

htmlInclude:

	* при добавдении newpage.html в /pages/newpage, необходимо указать в gulpfile.js -> htmlInclude() путь к newpage.html (например: /pages/newpage/newpage.html)

