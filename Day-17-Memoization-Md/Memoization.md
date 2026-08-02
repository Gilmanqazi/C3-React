React => Re-render
{React.memo}
1) React.memo => ye functional components ko mamoize kar dete hai (fnc ka ref hold karte hai )
memo is a method
when you need to memoize any functional components use => React.memo



2) export ke timeme React.memo(About) 

Rules: Main Sirf Static Component ko Memoize karunga -=> koi change na koi updatetion to ye static compo hai (React.memo)


Most Imp From Interview React=>
react.memo ke ander ek hi arg nhi jata isme 2 chiz jati hai  ek fnc ka ref  or ek callback or callback me (prevProps, nextProps)=>{
  return prevProps.users.id === nextProps.users.id agar true return hui to yaha koi bhi rerender perform nhi honga 
} 



{useCallback}
=>
used only for functions and ise ek dependecy array bhi hota hai jo same useEffect ke tarha kaam karta hai  


{useMemo}
=>
kisi bhi expensive operation ke result ko hold karna 

