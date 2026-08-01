"""
DSDG Data Analytics — Week 2 dataset fetch script
Source: FiveThirtyEight's "college-majors" open data repo (ASA/American Community
Survey-derived data behind their 2014 story "The Economic Guide To Picking A Major").
https://github.com/fivethirtyeight/data/tree/master/college-majors

Run this any semester to refresh the data before Week 2. It's the same file every
officer running this workshop should start from, so results are reproducible.
"""

import pandas as pd
import urllib.request

SOURCE_URL = "https://raw.githubusercontent.com/fivethirtyeight/data/master/college-majors/recent-grads.csv"
OUTPUT_PATH = "../data/recent-grads.csv"

def fetch():
    print(f"Downloading from {SOURCE_URL} ...")
    urllib.request.urlretrieve(SOURCE_URL, OUTPUT_PATH)
    df = pd.read_csv(OUTPUT_PATH)
    print(f"Saved {df.shape[0]} rows x {df.shape[1]} columns to {OUTPUT_PATH}")
    print(f"Major categories: {df['Major_category'].nunique()}")
    print(f"Rows with a missing value: {df.isnull().any(axis=1).sum()}")
    return df

if __name__ == "__main__":
    fetch()
