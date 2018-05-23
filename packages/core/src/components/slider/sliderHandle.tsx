/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";
import { Intent } from "../../common";

export const SliderHandleType = {
    FULL: "full" as "full",
    START: "start" as "start",
    // tslint:disable-next-line:object-literal-sort-keys
    END: "end" as "end",
};
export type SliderHandleType = typeof SliderHandleType[keyof typeof SliderHandleType];

export const SliderHandleInteractionKind = {
    LOCK: "lock" as "lock",
    PUSH: "push" as "push",
};
export type SliderHandleInteractionKind = typeof SliderHandleInteractionKind[keyof typeof SliderHandleInteractionKind];

export interface ISliderHandleProps {
    value: number;
    trackIntentAfter?: Intent;
    trackIntentBefore?: Intent;
    type?: SliderHandleType;
    interactionKind?: SliderHandleInteractionKind;
}

export class SliderHandle extends React.PureComponent<ISliderHandleProps> {
    public static displayName = "Blueprint2.SliderHandle";
}
