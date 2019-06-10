// @flow
import * as _ from 'lodash';
import * as React from 'react';
import {Image as RNImage, StyleSheet, View, Platform} from 'react-native';
import { type ____ImageStyleProp_Internal as ImageStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type {ImageSourcePropType} from 'react-native/Libraries/Image/ImageSourcePropType';

import CacheManager, {type DownloadOptions} from './CacheManager';

type ImageProps = {
    style?: ImageStyle,
    defaultSource?: ImageSourcePropType,
    options?: DownloadOptions,
    uri: string,
    transitionDuration?: number,
    tint?: 'dark' | 'light'
};

type ImageState = {
    uri: ?string
};

export default class Image extends React.Component<ImageProps, ImageState> {

    mounted = true;

    static defaultProps = {
        transitionDuration: 300,
        tint: 'dark'
    };

    state = {
        uri: undefined,
    };

    async load({uri, options = {}}: ImageProps): Promise<void> {
        if (typeof uri === 'string') {
            const path = await CacheManager.get(uri, options).getPath();
            if (this.mounted) {
                this.setState({ uri: path });
            }
        }
    }

    componentDidMount() {
        this.load(this.props);
    }

    componentDidUpdate(prevProps: ImageProps) {
        if (this.props.uri !== prevProps.uri) {
            this.load(this.props);
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render(): React.Node {
        const {style, defaultSource, tint, ...otherProps} = this.props;
        const {uri} = this.state;
        const hasDefaultSource = !!defaultSource;
        const isImageReady = !!uri;
        const computedStyle = [
            StyleSheet.absoluteFill,
            _.transform(
                _.pickBy(StyleSheet.flatten(style), (value, key) => propsToCopy.indexOf(key) !== -1),
                // $FlowFixMe
                (result, value, key) => Object.assign(result, { [key]: (value - (style.borderWidth || 0)) })
            )
        ];
        return (
            <View {...{style}}>
                {
                    (hasDefaultSource && !isImageReady) && (
                        <RNImage
                            source={defaultSource}
                            style={computedStyle}
                            {...otherProps}
                        />
                    )
                }
                {
                    hasPreview && (
                        <RNImage
                            source={preview}
                            resizeMode='cover'
                            style={computedStyle}
                            blurRadius={Platform.OS === 'android' ? 0.5 : 0}
                        />
                    )
                }
                {
                    isImageReady && (
                        <RNImage
                            source={{ uri }}
                            style={computedStyle}
                            {...otherProps}
                        />
                    )
                }
            </View>
        );
    }
}

const black = 'black';
const white = 'white';
const propsToCopy = [
    'borderRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'
];
