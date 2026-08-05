# Data Dictionary: nps_units.csv

Source: National Park Service Land Resources Division, official acreage report. Real government data, checked against the published total of 84,735,954 acres. Our copy is within 16 acres of that total out of 84.7 million, which is rounding, not error.

Grain: one row per National Park Service unit. 410 units total.

The National Park Service manages far more than "national parks." It runs 19 different types of sites: monuments, historic sites, battlefields, seashores, and more. Most people have never seen this distinction. That is part of why this dataset is interesting.

| Column | Meaning |
|---|---|
| Unit_Name | Official name of the unit |
| Designation | The type of unit. Parsed from the name. 27 of 410 units did not match a clean pattern and are labeled "Other Designation." This is a real limit of the source data, not a mistake in cleaning it. |
| State | State or states the unit sits in. Some units span more than one state, written like "MD-VA" |
| Region | The NPS administrative region managing the unit (Alaska, Intermountain, Midwest, National Capital, Northeast, Pacific West, Southeast, National Trails) |
| NPS_Fee_Acres | Land the NPS owns outright |
| NPS_Less_Than_Fee_Acres | Land where the NPS holds a partial interest, such as an easement, not full ownership |
| Other_Federal_Fee_Acres | Land inside the unit's boundary owned by a different federal agency |
| Subtotal_Federal_Acres | Sum of the three columns above |
| Other_Public_Acres | Land owned by a state or local government |
| Private_Acres | Land inside the boundary that is still privately owned |
| Subtotal_Non_Federal_Acres | Other_Public_Acres plus Private_Acres |
| Gross_Area_Acres | The full boundary of the unit, federal and non federal land combined |

## Two things worth noticing before you build anything

The smallest units are under one acre. The Mary McLeod Bethune Council House in Washington, DC is 0.07 acres, a single house. The largest, Wrangell-St Elias National Preserve in Alaska, is over 8.3 million acres. That is not a typo. Sort the data and see for yourself.

The median unit is about 1,900 acres. The average is over 200,000 acres. Those two numbers should not be anywhere close to each other, and the gap tells you something real about the shape of this dataset before you have written a single formula.
