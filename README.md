typo_paradise
=============

This is a Extension for TYPO3 6.2 for building web projects based 
on Twitter Bootstrap responsive Framework, Bower web package manager 
and Grunt task runner.

The extension is tested with [typo3machine](https://github.com/tschlich/typo3machine), 
a Vagrant VM including everything you need to run or try the Extension.

## How to use

1. Bring up the vagrant vm [typo3machine](https://github.com/tschlich/typo3machine) (or any other system you like to use)
2. Install TYPO3 and extension typo_paradise
3. Go to console (vagrant ssh, or whatever)
4. Navigate to private resources folder and run grunt task to compile less files

       cd /var/www/html/typo3conf/ext/typo_paradise/Resources/Private
       grunt less:development

5. @todo grunt watch
