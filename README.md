React Native Layout
=================
Shortcuts for React Native View and some styles

Example
================
```js
<View style={{flexDirection: 'row'}}>
  {/* view children*/}
</View>

<Layout>
  {/* view children*/}
</Layout>
```

```js
<View style={{flexDirection: 'column', flex: 1}}>
  {/* view children*/}
</View>

<Layout vertical fill>
  {/* view children*/}
</Layout>
```


```js
<View style={styles.container}>
  {/* view children*/}
</View>

const styles = StyleSheet.crate({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})



import {fillCenter} from 'react-native-layout/layouts';
<Layout style={fillCenter}>
  {/* view children*/}
</Layout>
```

```js
<View style={styles.rounded}>
  {/* view children*/}
</View>

const styles = StyleSheet.crate({
    rounded: {
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1
    }
})



import {border} from 'react-native-layout/layouts';
<Layout style={border(4, 'red', 1)}>
  {/* view children*/}
</Layout>



import {border} from 'react-native-layout/layouts';
<Layout style={styles.rounded}>
  {/* view children*/}
</Layout>

const styles = StyleSheet.crate({
    rounded: {
        ...border(4, 'red', 1)
    }
})

```