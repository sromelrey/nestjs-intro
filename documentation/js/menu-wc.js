'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-66af156674e9778fd4d6261c4c00f943b90724ba1fc8761ebf29ac082f74a5bd73432630e7c72c0c67af6dd17e871bb2a5f33c135d9d27ce7b970069e781a2a4"' : 'data-bs-target="#xs-controllers-links-module-AppModule-66af156674e9778fd4d6261c4c00f943b90724ba1fc8761ebf29ac082f74a5bd73432630e7c72c0c67af6dd17e871bb2a5f33c135d9d27ce7b970069e781a2a4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-66af156674e9778fd4d6261c4c00f943b90724ba1fc8761ebf29ac082f74a5bd73432630e7c72c0c67af6dd17e871bb2a5f33c135d9d27ce7b970069e781a2a4"' :
                                            'id="xs-controllers-links-module-AppModule-66af156674e9778fd4d6261c4c00f943b90724ba1fc8761ebf29ac082f74a5bd73432630e7c72c0c67af6dd17e871bb2a5f33c135d9d27ce7b970069e781a2a4"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-66af156674e9778fd4d6261c4c00f943b90724ba1fc8761ebf29ac082f74a5bd73432630e7c72c0c67af6dd17e871bb2a5f33c135d9d27ce7b970069e781a2a4"' : 'data-bs-target="#xs-injectables-links-module-AppModule-66af156674e9778fd4d6261c4c00f943b90724ba1fc8761ebf29ac082f74a5bd73432630e7c72c0c67af6dd17e871bb2a5f33c135d9d27ce7b970069e781a2a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-66af156674e9778fd4d6261c4c00f943b90724ba1fc8761ebf29ac082f74a5bd73432630e7c72c0c67af6dd17e871bb2a5f33c135d9d27ce7b970069e781a2a4"' :
                                        'id="xs-injectables-links-module-AppModule-66af156674e9778fd4d6261c4c00f943b90724ba1fc8761ebf29ac082f74a5bd73432630e7c72c0c67af6dd17e871bb2a5f33c135d9d27ce7b970069e781a2a4"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-6150f7b7e3710f644ed54702721ecb6f9942bb73f9c33299b34c154e9f40d77ecfe89753554c0b59346dba4e967e49c849ec224c60d1a17f30a3c64fea47de3b"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-6150f7b7e3710f644ed54702721ecb6f9942bb73f9c33299b34c154e9f40d77ecfe89753554c0b59346dba4e967e49c849ec224c60d1a17f30a3c64fea47de3b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-6150f7b7e3710f644ed54702721ecb6f9942bb73f9c33299b34c154e9f40d77ecfe89753554c0b59346dba4e967e49c849ec224c60d1a17f30a3c64fea47de3b"' :
                                            'id="xs-controllers-links-module-AuthModule-6150f7b7e3710f644ed54702721ecb6f9942bb73f9c33299b34c154e9f40d77ecfe89753554c0b59346dba4e967e49c849ec224c60d1a17f30a3c64fea47de3b"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-6150f7b7e3710f644ed54702721ecb6f9942bb73f9c33299b34c154e9f40d77ecfe89753554c0b59346dba4e967e49c849ec224c60d1a17f30a3c64fea47de3b"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-6150f7b7e3710f644ed54702721ecb6f9942bb73f9c33299b34c154e9f40d77ecfe89753554c0b59346dba4e967e49c849ec224c60d1a17f30a3c64fea47de3b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-6150f7b7e3710f644ed54702721ecb6f9942bb73f9c33299b34c154e9f40d77ecfe89753554c0b59346dba4e967e49c849ec224c60d1a17f30a3c64fea47de3b"' :
                                        'id="xs-injectables-links-module-AuthModule-6150f7b7e3710f644ed54702721ecb6f9942bb73f9c33299b34c154e9f40d77ecfe89753554c0b59346dba4e967e49c849ec224c60d1a17f30a3c64fea47de3b"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' :
                                            'id="xs-controllers-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' :
                                        'id="xs-injectables-links-module-PostsModule-748b666de8db78a59dd0ae52f720ee0e73eaf92e519446ba2d4d0e4626cc4b34a1e428a212a0f473af3d60fee8ebdbee6c364df6bb634e3023fd842f830f0542"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-3c187629315a66800b2fb19cf834a65d3402f009f38b81171b14ed17fc26d4259dcf774a6abce95025c20168984e7cacb4db06a6dc4a464b8418e100b3f64185"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-3c187629315a66800b2fb19cf834a65d3402f009f38b81171b14ed17fc26d4259dcf774a6abce95025c20168984e7cacb4db06a6dc4a464b8418e100b3f64185"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-3c187629315a66800b2fb19cf834a65d3402f009f38b81171b14ed17fc26d4259dcf774a6abce95025c20168984e7cacb4db06a6dc4a464b8418e100b3f64185"' :
                                            'id="xs-controllers-links-module-UsersModule-3c187629315a66800b2fb19cf834a65d3402f009f38b81171b14ed17fc26d4259dcf774a6abce95025c20168984e7cacb4db06a6dc4a464b8418e100b3f64185"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-3c187629315a66800b2fb19cf834a65d3402f009f38b81171b14ed17fc26d4259dcf774a6abce95025c20168984e7cacb4db06a6dc4a464b8418e100b3f64185"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-3c187629315a66800b2fb19cf834a65d3402f009f38b81171b14ed17fc26d4259dcf774a6abce95025c20168984e7cacb4db06a6dc4a464b8418e100b3f64185"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-3c187629315a66800b2fb19cf834a65d3402f009f38b81171b14ed17fc26d4259dcf774a6abce95025c20168984e7cacb4db06a6dc4a464b8418e100b3f64185"' :
                                        'id="xs-injectables-links-module-UsersModule-3c187629315a66800b2fb19cf834a65d3402f009f38b81171b14ed17fc26d4259dcf774a6abce95025c20168984e7cacb4db06a6dc4a464b8418e100b3f64185"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});