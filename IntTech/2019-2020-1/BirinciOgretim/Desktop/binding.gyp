'VCLinkerTool': {
'LinkTimeCodeGeneration': 1, # link-time code generation
'OptimizeReferences': 2, # /OPT:REF
'AdditionalOptions': "/FORCE:MULTIPLE",   # <- add this line
'EnableCOMDATFolding': 2, # /OPT:ICF
'LinkIncremental': 1, # disable incremental linking
},	