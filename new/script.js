{
    "name": "drupal/drupal",
    "description": "Drupal is an open source content management platform powering millions of websites and applications.",
    "type": "project",
    "license": "GPL-2.0-or-later",
    "require": {
        "composer/installers": "^1.0.24",
        "wikimedia/composer-merge-plugin": "^1.4"
    },
    "replace": {
        "drupal/core": "^8.5"
    },
    "minimum-stability": "dev",
    "prefer-stable": true,
    "config": {
        "preferred-install": "dist",
        "autoloader-suffix": "Drupal8"
    },
    "extra": {
        "_readme": [
            "By default Drupal loads the autoloader from ./vendor/autoload.php.",
            "To change the autoloader you can edit ./autoload.php.",
            "This file specifies the packages.drupal.org repository.",
            "You can read more about this composer repository at:",
            "https://www.drupal.org/node/2718229"
        ],
        "merge-plugin": {
            "include": [
                "core/composer.json"
            ],
            "recurse": true,
            "replace": false,
            "merge-extra": false
        },
        "installer-paths": {
            "core": ["type:drupal-core"],
            "modules/contrib/{$name}": ["type:drupal-module"],
            "profiles/contrib/{$name}": ["type:drupal-profile"],
            "themes/contrib/{$name}": ["type:drupal-theme"],
            "drush/contrib/{$name}": ["type:drupal-drush"],
            "modules/custom/{$name}": ["type:drupal-custom-module"],
            "themes/custom/{$name}": ["type:drupal-custom-theme"]
        }
    },
    "autoload": {
        "psr-4": {
            "Drupal\\Core\\Composer\\": "core/lib/Drupal/Core/Composer"
        }
    },
    "scripts": {
        "pre-autoload-dump": "Drupal\\Core\\Composer\\Composer::preAutoloadDump",
        "post-autoload-dump": "Drupal\\Core\\Composer\\Composer::ensureHtaccess",
        "post-package-install": "Drupal\\Core\\Composer\\Composer::vendorTestCodeCleanup",
        "post-package-update": "Drupal\\Core\\Composer\\Composer::vendorTestCodeCleanup",
        "drupal-phpunit-upgrade-check": "Drupal\\Core\\Composer\\Composer::upgradePHPUnit",
        "drupal-phpunit-upgrade": "@composer update phpunit/phpunit --with-dependencies --no-progress",
        "phpcs": "phpcs --standard=core/phpcs.xml.dist --runtime-set installed_paths $($COMPOSER_BINARY config vendor-dir)/drupal/coder/coder_sniffer --",
        "phpcbf": "phpcbf --standard=core/phpcs.xml.dist --runtime-set installed_paths $($COMPOSER_BINARY config vendor-dir)/drupal/coder/coder_sniffer --"
    },
    "repositories": [
        {
            "type": "composer",
            "url": "https://packages.drupal.org/8"
        }
    ]
}
