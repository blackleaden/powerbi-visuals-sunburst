/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
import * as d3 from "d3";

import { TooltipEnabledDataPoint } from "powerbi-visuals-utils-tooltiputils";

import { interactivitySelectionService } from "powerbi-visuals-utils-interactivityutils";
import SelectableDataPoint = interactivitySelectionService.SelectableDataPoint;

export interface SunburstData {
    root: SunburstDataPoint; // Tree data points
    dataPoints: SunburstDataPoint[]; // Flat data points
    total: number;
}

export interface SunburstDataPoint extends
    d3.TreemapLayout<SelectableDataPoint>, //UPD d3.layout.treemap.Node
    TooltipEnabledDataPoint,
    SelectableDataPoint {

    children?: SunburstDataPoint[];
    value?: number;
    color?: string;
    name?: string;
    parent?: SunburstDataPoint;
    total: number;
    key: string;
    highlight?: boolean;
}

