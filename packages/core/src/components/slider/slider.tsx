/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";

import { AbstractPureComponent } from "../../common/abstractPureComponent";
import { Intent } from "../../common/intent";
import * as Utils from "../../common/utils";
import { ICoreSliderProps, MultiSlider } from "./multiSlider";
import { SliderHandle } from "./sliderHandle";
import { SliderTrackStop } from "./sliderTrackStop";

export interface ISliderProps extends ICoreSliderProps {
    /**
     * Initial value of the slider, determines where the fill starts from.
     * @default 0
     */
    initialValue?: number;

    /**
     * Value of slider.
     * @default 0
     */
    value?: number;

    /** Callback invoked when the value changes. */
    onChange?(value: number): void;

    /** Callback invoked when the handle is released. */
    onRelease?(value: number): void;
}

export class Slider extends AbstractPureComponent<ISliderProps> {
    public static defaultProps: ISliderProps = {
        ...MultiSlider.defaultCoreProps,
        initialValue: 0,
        value: 0,
    };

    public static displayName: "Blueprint.Slider";

    public render() {
        const { initialValue, value, onChange, onRelease, ...props } = this.props;
        return (
            <MultiSlider {...props} onChange={this.getHandler(onChange)} onRelease={this.getHandler(onRelease)}>
                <SliderHandle
                    value={value}
                    trackIntentAfter={value < initialValue ? Intent.PRIMARY : undefined}
                    trackIntentBefore={value > initialValue ? Intent.PRIMARY : undefined}
                />
                <SliderTrackStop value={initialValue} />
            </MultiSlider>
        );
    }

    private getHandler(callback: (value: number) => void) {
        return ([value]: number[]) => {
            Utils.safeInvoke(callback, value);
        };
    }
}
