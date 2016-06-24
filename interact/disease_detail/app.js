(function() {
  'use strict';
  var _ = window._;
  var REGIONS_DETAIL = {
    'AFR D': [
      {
         'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
         'daly': 338
       },
      {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 170
      },
      {
         'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
         'daly': 136
       },
      {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 107
      },
      {
         'disease': 'Norovirus', 'category': 'diarrheal',
         'daly': 75
       },
      {
         'disease': 'Campylobacter spp.', 'category': 'diarrheal',
         'daly': 71
       },
      {
         'disease': 'Vibrio cholerae', 'category': 'diarrheal',
         'daly': 70
       },
      {
         'disease': 'Salmonella Typhi', 'category': 'invasive',
         'daly': 47
       },
      {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 37
      },
      {
         'disease': 'Aflatoxin', 'category': 'chemicals',
         'daly': 28
       },
      {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 27
      },
      {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 25
      },
      {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 21
      },
      {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 13
      },
      {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 12
      },
      {
         'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
         'daly': 11
       },
      {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 5
      },
      {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 2
      },
      {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 1
      },
      {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 1
      },
      {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.7
      },
      {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 0.4
      },
      {
         'disease': 'Dioxin', 'category': 'chemicals',
         'daly': 0.2
       },
      {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 0.03
      },
      {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 0.02
      },
      {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 0.01
      },
      {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.01
      },
      {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0
      },
      {
         'disease': 'Echinococcus multilocularis', 'category': 'helminths',
         'daly': 0
       },
      {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0
      },
      {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 0
      }
    ],
    'AFR E': [
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 193
      },
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 176
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 143
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 138
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 105
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 76
      },
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 70
      },
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 52
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 37
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 34
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 20
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 18
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 12
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 12
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 5
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 5
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 3
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 3
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 0.8
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.7
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 0.3
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 0.2
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.08
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 0.01
      },
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 0.01
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 0
      }
    ],
    'AMR A': [
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 9
      },
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 9
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 5
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 3
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 3
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 0.6
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 0.5
      },
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 0.4
      },
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 0.4
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 0.3
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.2
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 0.2
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 0.2
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 0.1
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 0.1
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 0.07
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 0.04
      },
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 0.04
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 0.04
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.03
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 0.03
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 0.01
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0.01
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 0.01
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 0
      }
    ],
    'AMR B': [
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 25
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 20
      },
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 15
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 12
      },
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 11
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 11
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 7
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 7
      },
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 7
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 3
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 2
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 2
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 2
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 0.7
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.4
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 0.4
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.4
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 0.4
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 0.3
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 0.1
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 0.06
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 0.04
      },
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 0.04
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0.01
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 0
      }
    ],
    'AMR D': [
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 69
      },
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 53
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 46
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 27
      },
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 15
      },
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 14
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 13
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 12
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 9
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 9
      },
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 8
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 2
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 2
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 2
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 2
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 2
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 2
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 2
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 1
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.5
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.5
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 0.4
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 0.2
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0.01
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 0
      }
    ],
    'EMR B': [
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 75
      },
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 50
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 46
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 29
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 28
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 27
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 23
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 20
      },
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 14
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 3
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 3
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 3
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 2
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 2
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 0.9
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 0.7
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.4
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.2
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 0.2
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 0.2
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 0.09
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 0.06
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 0.03
      },
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 0
      }
    ],
    'EMR D': [
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 97
      },
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 67
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 60
      },
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 45
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 37
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 37
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 33
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 32
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 28
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 18
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 13
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 13
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 10
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 7
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 5
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 4
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 3
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 3
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 2
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.6
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 0.6
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.2
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 0.08
      },
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 0.02
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 0.01
      },
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 0
      }
    ],
    'EUR A': [
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 12
      },
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 10
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 6
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 4
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 3
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 2
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 0.8
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.6
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 0.3
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 0.3
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 0.1
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 0.1
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 0.09
      },
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 0.09
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 0.08
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 0.07
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 0.07
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0.04
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.03
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 0.03
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 0.03
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 0.02
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 0.01
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 0
      }
    ],
    'EUR B': [
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 12
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 10
      },
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 8
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 4
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 3
      },
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 2
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 2
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 2
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 1
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 0.6
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 0.6
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 0.3
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 0.3
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 0.3
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 0.1
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 0.1
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.07
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 0.06
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 0.05
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 0.05
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0.04
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.03
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 0
      }
    ],
    'EUR C': [
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 11
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 10
      },
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 8
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 3
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 3
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 2
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 2
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 1
      },
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 0.9
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 0.9
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 0.8
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 0.6
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 0.5
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 0.5
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 0.2
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.1
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 0.1
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 0.09
      },
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 0.04
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0.04
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0.04
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 0.04
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.03
      },
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 0.03
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 0.01
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 0
      }
    ],
    'SEAR B': [
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 184
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 64
      },
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 59
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 55
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 42
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 42
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 40
      },
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 37
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 25
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 18
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 13
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 11
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 8
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 6
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 5
      },
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 3
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 2
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 2
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 0.8
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.2
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 0.2
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 0.2
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.1
      },
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 0.05
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 0.02
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0.01
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 0
      }
    ],
    'SEAR D': [
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 113
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 69
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 65
      },
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 58
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 58
      },
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 45
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 42
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 36
      },
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 33
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 26
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 25
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 14
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 14
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 13
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 9
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 6
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 4
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 2
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 0.8
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 0.7
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 0.4
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.2
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.1
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 0.1
      },
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 0.06
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 0.05
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0.04
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 0.01
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 0
      }
    ],
    'WPR A': [
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 9
      },
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 9
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 5
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 3
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 1
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 0.6
      },
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 0.6
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.4
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 0.2
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 0.2
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 0.1
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 0.1
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 0.1
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 0.1
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 0.07
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 0.05
      },
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 0.05
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.03
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 0.02
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 0.01
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 0.01
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 0
      },
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 0
      }
    ],
    'WPR B': [
     {
        'disease': 'Paragonimus spp.', 'category': 'helminths',
        'daly': 60
      },
     {
        'disease': 'Salmonella Typhi', 'category': 'invasive',
        'daly': 36
      },
     {
        'disease': 'Clonorchis sinensis', 'category': 'helminths',
        'daly': 31
      },
     {
        'disease': 'Taenia solium', 'category': 'helminths',
        'daly': 27
      },
     {
        'disease': 'Echinococcus multilocularis', 'category': 'helminths',
        'daly': 18
      },
     {
        'disease': 'Aflatoxin', 'category': 'chemicals',
        'daly': 17
      },
     {
        'disease': 'Ascaris spp.', 'category': 'helminths',
        'daly': 11
      },
     {
        'disease': 'Campylobacter spp.', 'category': 'diarrheal',
        'daly': 10
      },
     {
        'disease': 'Non-typhoidal S. enterica', 'category': 'diarrheal',
        'daly': 9
      },
     {
        'disease': 'Toxoplasma gondii', 'category': 'invasive',
        'daly': 9
      },
     {
        'disease': 'Intestinal flukes', 'category': 'helminths',
        'daly': 9
      },
     {
        'disease': 'Salmonella Paratyphi A', 'category': 'invasive',
        'daly': 8
      },
     {
        'disease': 'Enteropathogenic E. coli ', 'category': 'diarrheal',
        'daly': 5
      },
     {
        'disease': 'Hepatitis A virus', 'category': 'invasive',
        'daly': 5
      },
     {
        'disease': 'Norovirus', 'category': 'diarrheal',
        'daly': 4
      },
     {
        'disease': 'Enterotoxigenic E. coli', 'category': 'diarrheal',
        'daly': 4
      },
     {
        'disease': 'Shigella spp.', 'category': 'diarrheal',
        'daly': 4
      },
     {
        'disease': 'Mycobacterium bovis', 'category': 'invasive',
        'daly': 3
      },
     {
        'disease': 'Opisthorchis spp.', 'category': 'helminths',
        'daly': 3
      },
     {
        'disease': 'Listeria monocytogenes', 'category': 'invasive',
        'daly': 1
      },
     {
        'disease': 'Fasciola spp.', 'category': 'helminths',
        'daly': 0.9
      },
     {
        'disease': 'Brucella spp.', 'category': 'invasive',
        'daly': 0.6
      },
     {
        'disease': 'Cryptosporidium spp.', 'category': 'diarrheal',
        'daly': 0.3
      },
     {
        'disease': 'Entamoeba histolytica', 'category': 'diarrheal',
        'daly': 0.3
      },
     {
        'disease': 'Giardia spp.', 'category': 'diarrheal',
        'daly': 0.3
      },
     {
        'disease': 'Echinococcus granulosus', 'category': 'helminths',
        'daly': 0.3
      },
     {
        'disease': 'Vibrio cholerae', 'category': 'diarrheal',
        'daly': 0.1
      },
     {
        'disease': 'Dioxin', 'category': 'chemicals',
        'daly': 0.06
      },
     {
        'disease': 'Shiga toxin-producing E. coli', 'category': 'diarrheal',
        'daly': 0.01
      },
     {
        'disease': 'Trichinella spp.', 'category': 'helminths',
        'daly': 0
      },
     {
        'disease': 'Cassava cyanide', 'category': 'chemicals',
        'daly': 0
      }
    ]
  };
  var REGIONS = {
    'AFR D': {
      'All Hazards': 1276,
      'Chemicals and Toxins': 30,
      'Diarrheal Disease Agents': 889,
      'Helminths': 186,
      'Invasive Infectious Disease Agents': 146
    },
    'AFR E': {
      'All Hazards': 1179,
      'Chemicals and Toxins': 7,
      'Diarrheal Disease Agents': 824,
      'Helminths': 184,
      'Invasive Infectious Disease Agents': 147
    },
    'AMR A': {
      'All Hazards': 35,
      'Chemicals and Toxins': 0.4,
      'Diarrheal Disease Agents': 23,
      'Helminths': 1,
      'Invasive Infectious Disease Agents': 10
    },
    'AMR B': {
      'All Hazards': 140,
      'Chemicals and Toxins': 3,
      'Diarrheal Disease Agents': 60,
      'Helminths': 36,
      'Invasive Infectious Disease Agents': 38
    },
    'AMR D': {
      'All Hazards': 315,
      'Chemicals and Toxins': 2,
      'Diarrheal Disease Agents': 72,
      'Helminths': 185,
      'Invasive Infectious Disease Agents': 49
    },
    'EMR B': {
      'All Hazards': 362,
      'Chemicals and Toxins': 0.8,
      'Diarrheal Disease Agents': 277,
      'Helminths': 5,
      'Invasive Infectious Disease Agents': 73
    },
    'EMR D': {
      'All Hazards': 571,
      'Chemicals and Toxins': 9,
      'Diarrheal Disease Agents': 393,
      'Helminths': 21,
      'Invasive Infectious Disease Agents': 137
    },
    'EUR A': {
      'All Hazards': 41,
      'Chemicals and Toxins': 2,
      'Diarrheal Disease Agents': 28,
      'Helminths': 0.4,
      'Invasive Infectious Disease Agents': 10
    },
    'EUR B': {
      'All Hazards': 52,
      'Chemicals and Toxins': 0.9,
      'Diarrheal Disease Agents': 25,
      'Helminths': 6,
      'Invasive Infectious Disease Agents': 19
    },
    'EUR C': {
      'All Hazards': 49,
      'Chemicals and Toxins': 2,
      'Diarrheal Disease Agents': 24,
      'Helminths': 6,
      'Invasive Infectious Disease Agents': 16
    },
    'SEAR B': {
      'All Hazards': 685,
      'Chemicals and Toxins': 20,
      'Diarrheal Disease Agents': 330,
      'Helminths': 52,
      'Invasive Infectious Disease Agents': 272
    },
    'SEAR D': {
      'All Hazards': 711,
      'Chemicals and Toxins': 18,
      'Diarrheal Disease Agents': 380,
      'Helminths': 60,
      'Invasive Infectious Disease Agents': 244
    },
    'WPR A': {
      'All Hazards': 36,
      'Chemicals and Toxins': 0.3,
      'Diarrheal Disease Agents': 23,
      'Helminths': 2,
      'Invasive Infectious Disease Agents': 10
    },
    'WPR B': {
      'All Hazards': 293,
      'Chemicals and Toxins': 18,
      'Diarrheal Disease Agents': 41,
      'Helminths': 162,
      'Invasive Infectious Disease Agents': 65
    }
  };
  var COUNTRIES = {
    'CAN':  {name: 'Canada'},
    'CUB':  {name: 'Cuba'},
    'USA':  {name: 'United States'},
    'ATG':  {name: 'Antigua and Barbuda'},
    'ARG':  {name: 'Argentina'},
    'BHS':  {name: 'Bahamas'},
    'BRB':  {name: 'Barbados'},
    'BLZ':  {name: 'Belize'},
    'BRA':  {name: 'Brazil'},
    'CHL':  {name: 'Chile'},
    'COL':  {name: 'Colombia'},
    'CRI':  {name: 'Costa Rica'},
    'DMA':  {name: 'Dominica'},
    'DOM':  {name: 'Dominican Republic'},
    'SLV':  {name: 'El Salvador'},
    'GRD':  {name: 'Grenada'},
    'GUY':  {name: 'Guyana'},
    'HND':  {name: 'Honduras'},
    'JAM':  {name: 'Jamaica'},
    'MEX':  {name: 'Mexico'},
    'PAN':  {name: 'Panama'},
    'PRY':  {name: 'Paraguay'},
    'KNA':  {name: 'Saint Kitts and Nevis'},
    'LCA':  {name: 'Saint Lucia'},
    'VCT':  {name: 'Saint Vincent and the Grenadines'},
    'SUR':  {name: 'Suriname'},
    'TTO':  {name: 'Trinidad and Tobago'},
    'URY':  {name: 'Uruguay'},
    'VEN':  {name: 'Venezuela'},
    'BOL':  {name: 'Bolivia'},
    'ECU':  {name: 'Ecuador'},
    'GTM':  {name: 'Guatemala'},
    'HTI':  {name: 'Haiti'},
    'NIC':  {name: 'Nicaragua'},
    'PER':  {name: 'Peru'},
    'DZA':  {name: 'Algeria'},
    'AGO':  {name: 'Angola'},
    'BEN':  {name: 'Benin'},
    'BFA':  {name: 'Burkina Faso'},
    'CMR':  {name: 'Cameroon'},
    'CPV':  {name: 'Cape Verde'},
    'TCD':  {name: 'Chad'},
    'COM':  {name: 'Comoros'},
    'GNQ':  {name: 'Equatorial Guinea'},
    'GAB':  {name: 'Gabon'},
    'GMB':  {name: 'Gambia'},
    'GHA':  {name: 'Ghana'},
    'GIN':  {name: 'Guinea'},
    'GNB':  {name: 'Guinea-Bissau'},
    'LBR':  {name: 'Liberia'},
    'MDG':  {name: 'Madagascar'},
    'MLI':  {name: 'Mali'},
    'MRT':  {name: 'Mauritania'},
    'MUS':  {name: 'Mauritius'},
    'NER':  {name: 'Niger'},
    'NGA':  {name: 'Nigeria'},
    'STP':  {name: 'Sao Tome and Principe'},
    'SEN':  {name: 'Senegal'},
    'SYC':  {name: 'Seychelles'},
    'SLE':  {name: 'Sierra Leone'},
    'TGO':  {name: 'Togo'},
    'BWA':  {name: 'Botswana'},
    'BDI':  {name: 'Burundi'},
    'CAF':  {name: 'Central African Republic'},
    'COG':  {name: 'Congo'},
    'CIV':  {name: 'CA te dIvoire'},
    'COD':  {name: 'Democratic Republic of the Congo'},
    'ERI':  {name: 'Eritrea'},
    'ETH':  {name: 'Ethiopia'},
    'KEN':  {name: 'Kenya'},
    'LSO':  {name: 'Lesotho'},
    'MWI':  {name: 'Malawi'},
    'MOZ':  {name: 'Mozambique'},
    'NAM':  {name: 'Namibia'},
    'RWA':  {name: 'Rwanda'},
    'ZAF':  {name: 'South Africa'},
    'SWZ':  {name: 'Swaziland'},
    'UGA':  {name: 'Uganda'},
    'TZA':  {name: 'United Republic of Tanzania'},
    'ZMB':  {name: 'Zambia'},
    'ZWE':  {name: 'Zimbabwe'},
    'BHR':  {name: 'Bahrain'},
    'IRN':  {name: 'Iran, Islamic Republic of'},
    'JOR':  {name: 'Jordan'},
    'KWT':  {name: 'Kuwait'},
    'LBN':  {name: 'Lebanon'},
    'LBY':  {name: 'Libya'},
    'OMN':  {name: 'Oman'},
    'QAT':  {name: 'Qatar'},
    'SAU':  {name: 'Saudi Arabia'},
    'SYR':  {name: 'Syrian Arab Republic'},
    'TUN':  {name: 'Tunisia'},
    'ARE':  {name: 'United Arab Emirates'},
    'AFG':  {name: 'Afghanistan'},
    'DJI':  {name: 'Djibouti'},
    'EGY':  {name: 'Egypt'},
    'IRQ':  {name: 'Iraq'},
    'MAR':  {name: 'Morocco'},
    'PAK':  {name: 'Pakistan'},
    'SOM':  {name: 'Somalia'},
    'SSD':  {name: 'South Sudan'},
    'SDN':  {name: 'Sudan'},
    'YEM':  {name: 'Yemen'},
    'AND':  {name: 'Andorra'},
    'AUT':  {name: 'Austria'},
    'BEL':  {name: 'Belgium'},
    'HRV':  {name: 'Croatia'},
    'CYP':  {name: 'Cyprus'},
    'CZE':  {name: 'Czech Republic'},
    'DNK':  {name: 'Denmark'},
    'FIN':  {name: 'Finland'},
    'FRA':  {name: 'France'},
    'DEU':  {name: 'Germany'},
    'GRC':  {name: 'Greece'},
    'ISL':  {name: 'Iceland'},
    'IRL':  {name: 'Ireland'},
    'ISR':  {name: 'Israel'},
    'ITA':  {name: 'Italy'},
    'LUX':  {name: 'Luxembourg'},
    'MLT':  {name: 'Malta'},
    'MCO':  {name: 'Monaco'},
    'NLD':  {name: 'Netherlands'},
    'NOR':  {name: 'Norway'},
    'PRT':  {name: 'Portugal'},
    'SMR':  {name: 'San Marino'},
    'SVN':  {name: 'Slovenia'},
    'ESP':  {name: 'Spain'},
    'SWE':  {name: 'Sweden'},
    'CHE':  {name: 'Switzerland'},
    'GBR':  {name: 'United Kingdom'},
    'ALB':  {name: 'Albania'},
    'ARM':  {name: 'Armenia'},
    'AZE':  {name: 'Azerbaijan'},
    'BIH':  {name: 'Bosnia and Herzegovina'},
    'BGR':  {name: 'Bulgaria'},
    'GEO':  {name: 'Georgia'},
    'KGZ':  {name: 'Kyrgyzstan'},
    'MNE':  {name: 'Montenegro'},
    'POL':  {name: 'Poland'},
    'ROU':  {name: 'Romania'},
    'SRB':  {name: 'Serbia'},
    'SVK':  {name: 'Slovakia'},
    'TJK':  {name: 'Tajikistan'},
    'MKD':  {name: 'Macedonia, the Former Yugoslav Republic of'},
    'TUR':  {name: 'Turkey'},
    'TKM':  {name: 'Turkmenistan'},
    'UZB':  {name: 'Uzbekistan'},
    'BLR':  {name: 'Belarus'},
    'EST':  {name: 'Estonia'},
    'HUN':  {name: 'Hungary'},
    'KAZ':  {name: 'Kazakhstan'},
    'LVA':  {name: 'Latvia'},
    'LTU':  {name: 'Lithuania'},
    'MDA':  {name: 'Moldova, Republic of'},
    'RUS':  {name: 'Russian Federation'},
    'UKR':  {name: 'Ukraine'},
    'IDN':  {name: 'Indonesia'},
    'LKA':  {name: 'Sri Lanka'},
    'THA':  {name: 'Thailand'},
    'BGD':  {name: 'Bangladesh'},
    'BTN':  {name: 'Bhutan'},
    'PRK':  {name: 'Korea, Democratic Peoples Republic of'},
    'IND':  {name: 'India'},
    'MDV':  {name: 'Maldives'},
    'MMR':  {name: 'Myanmar'},
    'NPL':  {name: 'Nepal'},
    'TLS':  {name: 'Timor-Leste'},
    'AUS':  {name: 'Australia'},
    'BRN':  {name: 'Brunei Darussalam'},
    'JPN':  {name: 'Japan'},
    'NZL':  {name: 'New Zealand'},
    'SGP':  {name: 'Singapore'},
    'KHM':  {name: 'Cambodia'},
    'CHN':  {name: 'China'},
    'COK':  {name: 'Cook Islands'},
    'FJI':  {name: 'Fiji'},
    'KIR':  {name: 'Kiribati'},
    'LAO':  {name: 'Lao Peoples Democratic Republic'},
    'MYS':  {name: 'Malaysia'},
    'MHL':  {name: 'Marshall Islands'},
    'FSM':  {name: 'Micronesia, Federated States of'},
    'MNG':  {name: 'Mongolia'},
    'NRU':  {name: 'Nauru'},
    'NIU':  {name: 'Niue'},
    'PLW':  {name: 'Palau'},
    'PNG':  {name: 'Papua New Guinea'},
    'PHL':  {name: 'Philippines'},
    'KOR':  {name: 'Korea, Republic of'},
    'WSM':  {name: 'Samoa'},
    'SLB':  {name: 'Solomon Islands'},
    'TON':  {name: 'Tonga'},
    'TUV':  {name: 'Tuvalu'},
    'VUT':  {name: 'Vanuatu'},
    'VNM':  {name: 'Viet Nam'},
  };
  var COUNTRY_IN_REGION = [
    {country: 'CAN', region: 'AMR A'},
    {country: 'CUB', region: 'AMR A'},
    {country: 'USA', region: 'AMR A'},
    {country: 'ATG', region: 'AMR B'},
    {country: 'ARG', region: 'AMR B'},
    {country: 'BHS', region: 'AMR B'},
    {country: 'BRB', region: 'AMR B'},
    {country: 'BLZ', region: 'AMR B'},
    {country: 'BRA', region: 'AMR B'},
    {country: 'CHL', region: 'AMR B'},
    {country: 'COL', region: 'AMR B'},
    {country: 'CRI', region: 'AMR B'},
    {country: 'DMA', region: 'AMR B'},
    {country: 'DOM', region: 'AMR B'},
    {country: 'SLV', region: 'AMR B'},
    {country: 'GRD', region: 'AMR B'},
    {country: 'GUY', region: 'AMR B'},
    {country: 'HND', region: 'AMR B'},
    {country: 'JAM', region: 'AMR B'},
    {country: 'MEX', region: 'AMR B'},
    {country: 'PAN', region: 'AMR B'},
    {country: 'PRY', region: 'AMR B'},
    {country: 'KNA', region: 'AMR B'},
    {country: 'LCA', region: 'AMR B'},
    {country: 'VCT', region: 'AMR B'},
    {country: 'SUR', region: 'AMR B'},
    {country: 'TTO', region: 'AMR B'},
    {country: 'URY', region: 'AMR B'},
    {country: 'VEN', region: 'AMR B'},
    {country: 'BOL', region: 'AMR D'},
    {country: 'ECU', region: 'AMR D'},
    {country: 'GTM', region: 'AMR D'},
    {country: 'HTI', region: 'AMR D'},
    {country: 'NIC', region: 'AMR D'},
    {country: 'PER', region: 'AMR D'},
    {country: 'DZA', region: 'AFR D'},
    {country: 'AGO', region: 'AFR D'},
    {country: 'BEN', region: 'AFR D'},
    {country: 'BFA', region: 'AFR D'},
    {country: 'CMR', region: 'AFR D'},
    {country: 'CPV', region: 'AFR D'},
    {country: 'TCD', region: 'AFR D'},
    {country: 'COM', region: 'AFR D'},
    {country: 'GNQ', region: 'AFR D'},
    {country: 'GAB', region: 'AFR D'},
    {country: 'GMB', region: 'AFR D'},
    {country: 'GHA', region: 'AFR D'},
    {country: 'GIN', region: 'AFR D'},
    {country: 'GNB', region: 'AFR D'},
    {country: 'LBR', region: 'AFR D'},
    {country: 'MDG', region: 'AFR D'},
    {country: 'MLI', region: 'AFR D'},
    {country: 'MRT', region: 'AFR D'},
    {country: 'MUS', region: 'AFR D'},
    {country: 'NER', region: 'AFR D'},
    {country: 'NGA', region: 'AFR D'},
    {country: 'STP', region: 'AFR D'},
    {country: 'SEN', region: 'AFR D'},
    {country: 'SYC', region: 'AFR D'},
    {country: 'SLE', region: 'AFR D'},
    {country: 'TGO', region: 'AFR D'},
    {country: 'BWA', region: 'AFR E'},
    {country: 'BDI', region: 'AFR E'},
    {country: 'CAF', region: 'AFR E'},
    {country: 'COG', region: 'AFR E'},
    {country: 'CIV', region: 'AFR E'},
    {country: 'COD', region: 'AFR E'},
    {country: 'ERI', region: 'AFR E'},
    {country: 'ETH', region: 'AFR E'},
    {country: 'KEN', region: 'AFR E'},
    {country: 'LSO', region: 'AFR E'},
    {country: 'MWI', region: 'AFR E'},
    {country: 'MOZ', region: 'AFR E'},
    {country: 'NAM', region: 'AFR E'},
    {country: 'RWA', region: 'AFR E'},
    {country: 'ZAF', region: 'AFR E'},
    {country: 'SWZ', region: 'AFR E'},
    {country: 'UGA', region: 'AFR E'},
    {country: 'TZA', region: 'AFR E'},
    {country: 'ZMB', region: 'AFR E'},
    {country: 'ZWE', region: 'AFR E'},
    {country: 'BHR', region: 'EMR B'},
    {country: 'IRN', region: 'EMR B'},
    {country: 'JOR', region: 'EMR B'},
    {country: 'KWT', region: 'EMR B'},
    {country: 'LBN', region: 'EMR B'},
    {country: 'LBY', region: 'EMR B'},
    {country: 'OMN', region: 'EMR B'},
    {country: 'QAT', region: 'EMR B'},
    {country: 'SAU', region: 'EMR B'},
    {country: 'SYR', region: 'EMR B'},
    {country: 'TUN', region: 'EMR B'},
    {country: 'ARE', region: 'EMR B'},
    {country: 'AFG', region: 'EMR D'},
    {country: 'DJI', region: 'EMR D'},
    {country: 'EGY', region: 'EMR D'},
    {country: 'IRQ', region: 'EMR D'},
    {country: 'MAR', region: 'EMR D'},
    {country: 'PAK', region: 'EMR D'},
    {country: 'SOM', region: 'EMR D'},
    {country: 'SSD', region: 'EMR D'},
    {country: 'SDN', region: 'EMR D'},
    {country: 'YEM', region: 'EMR D'},
    {country: 'AND', region: 'EUR A'},
    {country: 'AUT', region: 'EUR A'},
    {country: 'BEL', region: 'EUR A'},
    {country: 'HRV', region: 'EUR A'},
    {country: 'CYP', region: 'EUR A'},
    {country: 'CZE', region: 'EUR A'},
    {country: 'DNK', region: 'EUR A'},
    {country: 'FIN', region: 'EUR A'},
    {country: 'FRA', region: 'EUR A'},
    {country: 'DEU', region: 'EUR A'},
    {country: 'GRC', region: 'EUR A'},
    {country: 'ISL', region: 'EUR A'},
    {country: 'IRL', region: 'EUR A'},
    {country: 'ISR', region: 'EUR A'},
    {country: 'ITA', region: 'EUR A'},
    {country: 'LUX', region: 'EUR A'},
    {country: 'MLT', region: 'EUR A'},
    {country: 'MCO', region: 'EUR A'},
    {country: 'NLD', region: 'EUR A'},
    {country: 'NOR', region: 'EUR A'},
    {country: 'PRT', region: 'EUR A'},
    {country: 'SMR', region: 'EUR A'},
    {country: 'SVN', region: 'EUR A'},
    {country: 'ESP', region: 'EUR A'},
    {country: 'SWE', region: 'EUR A'},
    {country: 'CHE', region: 'EUR A'},
    {country: 'GBR', region: 'EUR A'},
    {country: 'ALB', region: 'EUR B'},
    {country: 'ARM', region: 'EUR B'},
    {country: 'AZE', region: 'EUR B'},
    {country: 'BIH', region: 'EUR B'},
    {country: 'BGR', region: 'EUR B'},
    {country: 'GEO', region: 'EUR B'},
    {country: 'KGZ', region: 'EUR B'},
    {country: 'MNE', region: 'EUR B'},
    {country: 'POL', region: 'EUR B'},
    {country: 'ROU', region: 'EUR B'},
    {country: 'SRB', region: 'EUR B'},
    {country: 'SVK', region: 'EUR B'},
    {country: 'TJK', region: 'EUR B'},
    {country: 'MKD', region: 'EUR B'},
    {country: 'TUR', region: 'EUR B'},
    {country: 'TKM', region: 'EUR B'},
    {country: 'UZB', region: 'EUR B'},
    {country: 'BLR', region: 'EUR C'},
    {country: 'EST', region: 'EUR C'},
    {country: 'HUN', region: 'EUR C'},
    {country: 'KAZ', region: 'EUR C'},
    {country: 'LVA', region: 'EUR C'},
    {country: 'LTU', region: 'EUR C'},
    {country: 'MDA', region: 'EUR C'},
    {country: 'RUS', region: 'EUR C'},
    {country: 'UKR', region: 'EUR C'},
    {country: 'IDN', region: 'SEAR B'},
    {country: 'LKA', region: 'SEAR B'},
    {country: 'THA', region: 'SEAR B'},
    {country: 'BGD', region: 'SEAR D'},
    {country: 'BTN', region: 'SEAR D'},
    {country: 'PRK', region: 'SEAR D'},
    {country: 'IND', region: 'SEAR D'},
    {country: 'MDV', region: 'SEAR D'},
    {country: 'MMR', region: 'SEAR D'},
    {country: 'NPL', region: 'SEAR D'},
    {country: 'TLS', region: 'SEAR D'},
    {country: 'AUS', region: 'WPR A'},
    {country: 'BRN', region: 'WPR A'},
    {country: 'JPN', region: 'WPR A'},
    {country: 'NZL', region: 'WPR A'},
    {country: 'SGP', region: 'WPR A'},
    {country: 'KHM', region: 'WPR B'},
    {country: 'CHN', region: 'WPR B'},
    {country: 'COK', region: 'WPR B'},
    {country: 'FJI', region: 'WPR B'},
    {country: 'KIR', region: 'WPR B'},
    {country: 'LAO', region: 'WPR B'},
    {country: 'MYS', region: 'WPR B'},
    {country: 'MHL', region: 'WPR B'},
    {country: 'FSM', region: 'WPR B'},
    {country: 'MNG', region: 'WPR B'},
    {country: 'NRU', region: 'WPR B'},
    {country: 'NIU', region: 'WPR B'},
    {country: 'PLW', region: 'WPR B'},
    {country: 'PNG', region: 'WPR B'},
    {country: 'PHL', region: 'WPR B'},
    {country: 'KOR', region: 'WPR B'},
    {country: 'WSM', region: 'WPR B'},
    {country: 'SLB', region: 'WPR B'},
    {country: 'TON', region: 'WPR B'},
    {country: 'TUV', region: 'WPR B'},
    {country: 'VUT', region: 'WPR B'},
    {country: 'VNM', region: 'WPR B'},
  ];
  var parameters = parseQueryString();
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var titleRegionEl = document.getElementById('title__region');
    var titleAllEl = document.getElementById('title__all');
    var scaleValueAllEl = document.getElementById('data__scale__value--all');
    var countriesEl = document.getElementById('countries');
    var countryEl;
    var i;
    var code = parameters.code;
    var region = _.find(COUNTRY_IN_REGION, matchesCountry).region;
    var countries = _.filter(COUNTRY_IN_REGION, matchesRegion)
      .map(pluckCountry).sort();
    var allHazards = REGIONS[region]['All Hazards'];
    var detail;
    var barChemicalsEl = document
    .getElementById('data__metric__value__bar--chemicals');
    var barDiarrhealEl = document
    .getElementById('data__metric__value__bar--diarrheal');
    var barHelminthsEl = document
    .getElementById('data__metric__value__bar--helminths');
    var barInvasiveEl = document
        .getElementById('data__metric__value__bar--invasive');
    var dataDetailEl = document
        .getElementById('data__detail');
    var detailEl;
    titleRegionEl.innerHTML = region;
    titleAllEl.innerHTML = allHazards;
    scaleValueAllEl.innerHTML = allHazards;
    for (i = 0; i < countries.length; i++) {
      countryEl = document.createElement('div');
      countryEl.classList.add('countries__country');
      countryEl.innerHTML = COUNTRIES[countries[i]].name;
      if (countries[i] === code) {
        countryEl.style.fontWeight = 'bold';
      }
      countriesEl.appendChild(countryEl);
    }
    for (i = 0; i < REGIONS_DETAIL[region].length; i++) {
      detail = REGIONS_DETAIL[region][i];
      detailEl = document.createElement('div');
      detailEl.classList.add('data__detail__metric');
      detailEl.innerHTML = [
'<div class="data__detail__metric__title data__detail__metric__title--' +
        detail.category + '">' +
        detail.disease +
        '</div>',
        '<div class="data__detail__metric__value">',
        '  <div id="data__detail__metric__value__bar--invasive"' +
        'style="width: ' +
        (100 * detail.daly / allHazards) +
        '%;" class="data__detail__metric__value__bar"></div>',
        '</div>'
      ].join('\n');
      dataDetailEl.appendChild(detailEl);
    }
    barChemicalsEl.style.width =
      (100 * REGIONS[region]['Chemicals and Toxins'] / allHazards) + '%';
    barDiarrhealEl.style.width =
      (100 * REGIONS[region]['Diarrheal Disease Agents'] / allHazards) + '%';
    barHelminthsEl.style.width =
      (100 * REGIONS[region].Helminths / allHazards) + '%';
    barInvasiveEl.style.width =
      (100 * REGIONS[region]['Invasive Infectious Disease Agents'] /
      allHazards) + '%';
    function matchesCountry(o) {
      return o.country === code;
    }
    function matchesRegion(o) {
      return o.region === region;
    }
    function pluckCountry(o) {
      return o.country;
    }
  }
  function parseQueryString() {
    var i;
    var parameterArray;
    var parsed = {};
    var qs = window.location.search;
    var qsArray;
    if (!qs) {
      return parsed;
    }
    qsArray = qs.substr(1).split('&');
    for (i = 0; i < qsArray.length; ++i) {
      parameterArray = qsArray[i].split('=', 2);
      if (parameterArray.length === 1) {
        parsed[parameterArray[0]] = '';
      } else {
        parsed[parameterArray[0]] = decodeURIComponent(parameterArray[1].replace(/\+/g, ' '));
      }
    }
    return parsed;
  }

})();
