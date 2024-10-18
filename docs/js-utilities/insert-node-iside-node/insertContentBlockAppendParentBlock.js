
function insertContentBlockAppendParentBlock (stringPathToContentBlockModule, stringParentBlockId) {
    
    import(stringPathToContentBlockModule)
    .then( module => document.getElementById(stringParentBlockId).append(module.default) )
}


