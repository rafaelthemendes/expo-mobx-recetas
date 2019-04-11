import React from 'react';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../config/font-config.json';

const CustomIcon = createIconSetFromFontello(fontelloConfig, 'Icons');

const Icon = ({ name, style = {} }) => <CustomIcon name={name} style={style} />;

export default Icon;
