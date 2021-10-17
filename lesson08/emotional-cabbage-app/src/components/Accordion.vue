<template>
  <!-- Accordion component uses a v-for loop to create the AccordionItem components, 
  binds collapsetarget and datatarget to make the accordion open each item correctly-->
  <div class="accordion" id="accordionExample">
    <AccordionItem v-for="item in items" 
    v-bind:key="item.id"
    v-bind:variety="item.variety"
    v-bind:define="item.define"
    v-bind:collapseTarget="item.collapseTarget" 
    v-bind:dataTarget="item.dataTarget" />
  </div>
</template>

<script>
import AccordionItem from '@/components/AccordionItem.vue'

export default {
  name: 'Accordion',
  components: {
    AccordionItem
  },
  props: {},
  data() {
    return { items:
      [
        { id: 1, variety: "Green Cabbage", 
                  define: "The king of cabbages and our old friend! The wide fan-like leaves are pale green in color and with a \
                  slightly rubbery texture when raw. Pick heads that are tight and feel heavy for their size. The outer few layers \
                  are usually wilted and should be discarded before preparing. Sliced thinly, green cabbage can be eaten raw or it \
                  can go into stir-fries, soups, and braises. The whole leaves can also be used to make cabbage rolls. Raw leaves are \
                  somewhat peppery in flavor, but the cabbage gets sweeter as it cooks. Cabbage is an exceptionally healthy food. \
                  It has an outstanding nutrient profile and is especially high in vitamins C and K. In addition, eating cabbage may \
                  even help lower the risk of certain diseases, improve digestion and combat inflammation. ", 
                  collapseTarget: "collapseOne", dataTarget: "#collapseOne" },
        { id: 2, variety: "Red Cabbage", 
                  define: "Similar to green cabbage, but with dark reddish-purple leaves. We think the flavor is a little deeper and \
                  earthier. Pick heads that are tight and heavy for their size, and slice it thinly for any preparation. We love it’s \
                  color in coleslaw and leafy green salad mixes. It tastes similar to green cabbage. However, the red variety is richer \
                  in beneficial plant compounds that have been linked to health benefits, such as stronger bones and a healthier heart. \
                  Red cabbage is also thought to lower inflammation and protect against certain types of cancers. Moreover, it’s an \
                  incredibly versatile vegetable that can be enjoyed raw, cooked, or fermented and added to a variety of dishes. ", 
                  collapseTarget: "collapseTwo", dataTarget: "#collapseTwo"  },
        { id: 3, variety: "Savoy Cabbage", 
                  define: "This is the prettiest cabbage in the bunch, we think! They’re shaped like green cabbages, but the leaves are \
                  deep green and deeply crinkled. Their flavor is mild and earhty, and the leaves are tender even when raw. Heads should \
                  be compact and tight, but will have a little more give to them because of the wrinkled leaves. We really like savoy \
                  cabbage sliced thinly in soups and stir-fries. Native to Europe, this wild plant was bred through the centuries into \
                  many sub-species that are extremely diverse. It has been a staple food for Europeans since the Middle Ages and many \
                  health benefits are attributed to this plant. ", 
                  collapseTarget: "collapseThree", dataTarget: "#collapseThree" },
        { id: 4, variety: "Napa Cabbage", 
                  define: "Also called Chinese cabbage, this oblong-shaped cabbage has thick, crisp stems and frilly yellow-green leaves. \
                  We think its flavor is sweeter and softer than green cabbage, and we really love eating it raw in salads and using it in \
                  the filling for dumplings. Avoid napa cabbages with limp stems or wilted leaves. \
                  Napa cabbage is an incredibly low-calorie \
                  green-leafy vegetable. 100 g fresh leaves carry just 16 calories. Along with celery, bok-choy, etc., it easily fits into \
                  the neo-class of zero calorie or negative calorie group of vegetables as oftentimes advocated by dieticians. ", 
                  collapseTarget: "collapseFour", dataTarget: "#collapseFour" },
        { id: 5, variety: "Bok Choy", 
                  define: "Bok choy stems are white and watery-crisp, while the leaves are deep green and very tender. The flavor of bok choy \
                  reminds us of baby spinach or swiss chard, and we love it in stir-fries, brothy soups, and steamed mixed vegetable dishes. \
                  Along with being crunchy and delicious, bok choy is full of fiber, vitamins, minerals, and other nutrients that make it a \
                  beneficial addition to your diet. Like other dark, leafy greens, it’s full of antioxidants and other compounds that help to \
                  promote better health. ", 
                  collapseTarget: "collapseFive", dataTarget: "#collapseFive" },
        { id: 6, variety: "Brussels Sprouts", 
                  define: "Brussels sprouts are named after Brussels, Belgium, where it is believed they were first widely cultivated in the \
                  16th century. Sometimes called mini cabbages, they have appeared on “most hated vegetable” lists due to their potentially \
                  bitter flavors caused by sulfur-containing compounds. Overcooking the vegetable, particularly by boiling, will intensify any \
                  bitter flavors and unpleasant odors. However, when properly cooked and seasoned, Brussels sprouts offer a natural, nutty sweetness. \
                  Brussels sprouts have a lot of a natural, sulfur-based substance with a name that's a bit of a tongue twister: glycosinolate glucobrassicin. \
                  Research shows that this compound may help prevent damage to your DNA that raises your chances of getting cancer. It may also stop new blood \
                  vessels from growing inside tumors. ", 
                  collapseTarget: "collapseSix", dataTarget: "#collapseSix" }
]
    }
  }
}
</script>